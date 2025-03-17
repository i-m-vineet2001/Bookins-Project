import * as userController from '../controllers/user.controller.js';
import { Router } from 'express';
const router = Router();

router.get("/", userController.helloWorld);

export default router;