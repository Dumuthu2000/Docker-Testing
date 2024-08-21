import express from 'express';
const router = express.Router();
import { createUser, getAllUsers } from '../controller/userController.js';

router.post(`/create`, createUser);
router.get(`/get`, getAllUsers);

export default router;