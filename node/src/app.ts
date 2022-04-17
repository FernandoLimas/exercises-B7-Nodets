// 1- instalar nodejs
// 2- rodar: npm init -y
// 3- instalar: npm install typescript -D
// 4- configurar: tsc --init
// 5- instalar o nodemon: npm install nodemon -D
// 6- node com typescript: ts-node
// 7- instalar o express: npm install express -D
// 8- instalar types do express: npm install @types/express -D
// 9- instalar o body-parser: npm install body-parser -D
// 10- instalar o cors: npm install cors -D
// 11- intalando o mustache: npm install mustache-express -D
// 12- instalar types do mustache: npm install @types/mustache-express

import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import router from './routes/index';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

// ---função de middleware---
// var myLogger = function (req: Request, res: Response, next: NextFunction) {
//   console.log('LOGGED');
//   next();
// };

// server.use(myLogger);

// ---separando rotas---
server.use('/rout', router);

server.get('/', (req: Request, res: Response) => {
  let age: number = 60;
  let showOld: boolean = false;

  if(age > 50) {
    showOld = true;
  };

  let user = {
    name: 'Fernando',
  };

  res.render('homes', {
    user,
    showMe: true,
    age,
    showOld,
    products: [
      {title: 'Coca', price: 12},
      {title: 'Picanha', price: 100},
      {title: 'Vinho', price: 80},
    ],
    listaSimples: [
      'Maria',
      'Santos',
      'Fabiana',
    ] 
  });
});

// ---req.query---
server.get('/nome', (req: Request, res: Response) => {
  
  let nome: string = req.query.nome as string;
  res.render('nome', {
    nome
  });
});
// ---

server.get('/contato', (req: Request, res: Response) => {
  res.render('contato');
});

// ---erro 404---
server.use((req: Request, res: Response) => {
  res.status(404).send('Página não encontrada')
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
} );
