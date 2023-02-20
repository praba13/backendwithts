import express from 'express';
import * as UserController from '../controllers/userControllers';

const router = express.Router();

router.get('/', UserController.getAuthenticatedUser);
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
export default router;
