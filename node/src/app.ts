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

import express, { Request, Response} from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
  res.status(200).send('HOME')
})

// erro 404
server.use((req: Request, res: Response) => {
  res.status(404).send('Página não encontrada')
})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
} );


