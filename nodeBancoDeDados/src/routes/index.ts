import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);
router.post('/', HomeController.newuser);
router.put('/:id', HomeController.home);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/usuario/:id/add', UserController.add);
router.get('/usuario/:id/dec', UserController.dec);
router.get('/usuario/:id/del', UserController.del);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

export default router;