import express from 'express';
const router = express.Router();
import * as UserController from '../../controllers/userController';

router.get('/', UserController.getUser);

export default router;
