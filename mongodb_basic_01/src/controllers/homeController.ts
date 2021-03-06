import { Request, Response } from 'express';
import { Product } from '../models/Product';
import User from '../models/User';


export const home = async (req: Request, res: Response)=>{

   let users = await User.find({}, {"name.firstName":1, _id:0, age:1}).sort({age: 1});
    console.log('Users: ', users );
    

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'FERNANDO',
        lastName: 'LIMA',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};