import { Router, Request, Response} from "express";

const painelRouter = Router();

painelRouter.get('/', (req: Request, res: Response) => {
  res.send('Home painel')
});

painelRouter.get('/noticias', (req: Request, res: Response) => {
  res.send('Página notícias.')
})

export default painelRouter;