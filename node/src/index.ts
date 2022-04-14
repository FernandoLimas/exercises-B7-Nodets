import express, {Request, Response} from 'express';
import router from './routes';
import painelRouter from './routes/painel';

const app = express();

app.use(router);
app.use('/painel', painelRouter);

app.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada')
})

app.listen(3000, () => {
    console.log('Servidor Online');
});
