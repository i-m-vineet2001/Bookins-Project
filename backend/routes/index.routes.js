import * as userController from '../controllers/user.controller.js';
import { Router } from 'express';
const router = Router();

router.get("/", userController.helloWorld);
router.post("/signup", userController.signup);
router.post("/login" , userController.login)
export default router;