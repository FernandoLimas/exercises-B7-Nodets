import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);

router.get('/users', ApiController.getUsers)

router.post('/register', ApiController.register)

router.post('/login', ApiController.login);

router.delete('/users/:id', ApiController.destroy);

router.get('/list', ApiController.list);

export default router;