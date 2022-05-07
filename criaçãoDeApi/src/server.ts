import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const server = express();

server.use(bodyParser.json());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.get('/ping', (req: Request, res: Response) => {
    res.status(200);
    res.json('pong');
})

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

server.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});