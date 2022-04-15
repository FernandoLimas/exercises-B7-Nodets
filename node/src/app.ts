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

import express, { Request, Response} from 'express';
import router from './routes/index';
import path from 'path';
import mustache from 'mustache-express';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req: Request, res: Response) => {
  res.status(200).send('HOME')
})

// separando rotas
server.use('/rout', router);

// erro 404
server.use((req: Request, res: Response) => {
  res.status(404).send('Página não encontrada')
})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
} );


