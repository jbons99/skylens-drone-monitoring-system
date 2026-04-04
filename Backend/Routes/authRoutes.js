import express from "express";
import { login, register, logout } from '../controllers/authController.js';
const router = express.Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/').get(logout);

export default router;
