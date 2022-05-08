import { create } from "domain";
import { Router } from "express";
import { createFhrases, destroy, getById, getFhrases, updadteFhrases } from "../controllers/fhrasesControllers";

const router = Router();

router.get('/fhrases', getFhrases);

router.get('/fhrases/:id', getById);

router.post('/fhrases', createFhrases);

router.put('/fhrases/:id', updadteFhrases);

router.delete('/fhrases/:id', destroy);

export default router;