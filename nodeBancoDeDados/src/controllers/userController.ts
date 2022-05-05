import { Request, Response } from 'express';
import { User } from '../models/User';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

export const add = async (req: Request, res: Response) => {
    console.log(req.params);
    const { id } = req.params;
    
    let results = await User.findAll({where: {id}});
    if(results.length > 0) {
        let usuario = results[0];

        usuario.age++;
        await usuario.save();
    }

    res.redirect('/');
}
export const dec = async (req: Request, res: Response) => {
    const { id } = req.params;

    let results = await User.findAll({where: {id}});
    if(results.length > 0) {
        let usuario = results[0];

        usuario.age--;

        await usuario.save();
    }

    res.redirect('/');
}
export const del = async (req: Request, res: Response) => {
    const { id } = req.params;

    const results = await User.findAll({where: {id}});
    if(results.length > 0) {
        let usuario = results[0];

        usuario.destroy();

        await usuario.save();
    }

    res.redirect('/');
}