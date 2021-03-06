// CONTROLLERS: VERIFICAÇÃO DE CAMPOS

import { Request, Response } from 'express';
import * as UserService from '../services/UserService';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
};

export const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if( email && password ) {

        const newUser = await UserService.createUser(email, password);

        if(newUser instanceof Error) {
            return res.status(401).json({ error: 'Incorrect' });
            
        } else {
            res.status(201);
            return res.json({ id: newUser.id, email: newUser.email });
            
        }
    }

    res.json({ error: 'E-mail e/ou senha não enviados.' });
};

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        const user = await UserService.findByEmail(email);

        if(user && UserService.matchPassword(password, user.password)) {
            res.json({ status: true });
            return;
        }
    }

    res.json({ status: false });
};

export const list = async (req: Request, res: Response) => {
    let users = await UserService.allUsers();
    let list: string[] = [];

    for(let i in users) {
        list.push( users[i].email );
    }

    res.json({ list });
};