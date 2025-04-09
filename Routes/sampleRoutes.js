import express from 'express';
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserByIdController,
  deleteUserByIdController,
} from '../Controllers/sampleController.js';

const router = express.Router();

router.post('/users', createUserController);
router.get('/users', getAllUsersController);
router.get('/users/:id', getUserByIdController);
router.put('/users/:id', updateUserByIdController);
router.delete('/users/:id', deleteUserByIdController);

export default router;
