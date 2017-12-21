'use strict';

import express from 'express';
import * as UserController from '../../controllers/user.controller';
import * as auth from '../../services/auth.service';

const router = express.Router();

router.get('/', auth.hasRole('admin'), UserController.index);
router.delete('/:id', auth.hasRole('admin'), UserController.destroy);
router.get('/me', auth.isAuthenticated(), UserController.me);
router.put('/:id/password', auth.isAuthenticated(), UserController.changePassword);
router.get('/:id', auth.isAuthenticated(), UserController.show);
router.post('/', UserController.create);

export default router;
