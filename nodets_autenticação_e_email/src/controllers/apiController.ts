import { Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/User';

dotenv.config();

export const ping = (req: Request, res: Response) => {
  res.json("pong");
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();

  res.status(200);
  res.json(users)
}

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  if( email && password) {
  console.log(req.body);

  let hasUser =  await User.findOne({where: {email}});

  if(!hasUser) {
      const newUser = await User.create({email, password});
  // Gera o token depois que o usuário for CRIADO
        const token = JWT.sign(
          { id: newUser.id, email: newUser.email },
          process.env.JWT_SECRET_KEY as string,
          { expiresIn: '2h' }
        );
        
        return res.json({ id: newUser.id, token});
      
    } else {
      return res.json({ message: 'Usuário já existe.'});
    }
  } 

  return res.json({ error: 'E-mail ou senhas não enviados.'});
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if( email && password) {
    let user = await User.findOne({where: { email, password }});

    if(user) {
  // Gera o token depois que o usuário for ENCONTRADO.
      const token = JWT.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: '2h' }
      );
      return res.json({ id: user.id, token});
    }
  }

  res.json({ status: `${false}: NÃO EXISTE`});
}

export const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  await User.destroy({where : {id}});

  res.status(200);
  res.json({ message: `Delete successfull. Id:${id}`})
}

export const list = async (req: Request, res: Response) => {
  const list =  await User.findAll();

  res.json({E_mails: list.map(item => item.email)})
}