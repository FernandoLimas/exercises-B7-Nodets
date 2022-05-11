import { Request, Response, NextFunction } from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/User';

dotenv.config();

export const Auth =  {
    private: async (req: Request, res: Response, next: NextFunction) => {
    let success = false;
    
    // Fazer verificação de auth. Pegar o conteúdo através de um Bearer que gera um array:[Bearer, token]
    if(req.headers.authorization) {

      const [authType, token] = req.headers.authorization.split(' ');
      // Fazendo verificação para ver se o type é igual a Bearer
      if(authType === 'Bearer') {
        try {
          const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY as string);

          console.log("DECODED", decoded);
          if(decoded){
            success = true;
          }

        } catch (error) {
          
        }
        
      }
    }

    if(success) {
        next();

    } else {
      
      res.status(403);
      res.json({ error: 'Não autorizado.'});
    }
  },
}