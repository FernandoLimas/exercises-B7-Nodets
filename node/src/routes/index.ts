import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  let user2 = 'Lima';
  res.render('homes', { user2 });
}); 

export default router;
