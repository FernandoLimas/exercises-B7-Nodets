import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Home da página');
});

router.get('/contato', (req: Request, res: Response) => {
  res.send('Página de contato');
});

router.get('/sobre', (req: Request, res: Response) => {
  res.send('Página institucional');
});

export default router;
