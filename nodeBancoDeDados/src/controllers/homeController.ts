import { Request, Response } from 'express';
import { User } from '../models/User';
import { Op } from 'sequelize';
// ---11 import { sequelize } from '../instances/mysql';

import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{
    // ---11 vizualização da conexão com o BD ok.
    // try {
    //     await sequelize.authenticate();
    //     console.log('Conexão com o banco de dados realizada com sucesso!');
    // } catch (error) {
    //     console.log('Erro ao conectar com o banco de dados'+ error); 
    // }
    
    // --- consulta findAll() retorna um array de objetos.
    // const users = await User.findAll({
        // attributes: ['name', 'age'],
        // attributes: { exclude: ['age'] }, 
        // where: { name: 'Lili' }, fitrar por nome
        // ---22 where: { [Op.or]: [{name: 'Fernando'}, {name: 'Lima'}]}
        // order: [
        //     ['name', 'ASC'],
        // ]
    // });

    const users = await User.findAll();

    // ---Encontrar o usuário pelo id---
    // let results = await User.findAll({
    //     where: {
    //         id: 1
    //     }
    // });
    // ---Se encontrar o usuário pelo id, altera nome e idade---
    // if(results.length > 0){
    //     let usuario = results[0];
    //     usuario.name = 'Lili';
    //     usuario.age = 18;

    //     await usuario.save();
    // }


    // ---Atualiza um usuário--- User.update
    await User.update(
        { age: 20}, { // O que eu quero atualizar, idade para 18
            where: {
                age: {
                    [Op.eq]: [18]  // Em quem eu vou atualizar, quem tem idade 32 ou 33
                }
           }
        });

    // ---1 Deleta um usuário--- User.destroy
    await User.destroy({ 
        where: {
            age: {
                [Op.eq]: [0]
        }
    }
    });
    // ---2 Deleta um usuário primeiro friltando---destroy
    // let results = await User.findAll({
    //     where: { id: 1}
    // })
    // if(results.length > 0){
    //     let usuario = results[0];
    //     await usuario.destroy();
    // }
    
    let ages: number = 90;
    let showOld: boolean = false;

    if(ages > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Fernando',
        lastName: 'Lima',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};

type User = {
    name: string,
    age: number
};

// ---Cria um novo usuário--- rota POST
export const newuser = async (req: Request, res: Response)=>{
    const { name, age } = req.body;

    const user = await User.create({
        name,
        age
       
    });
    res.redirect('/');
}


