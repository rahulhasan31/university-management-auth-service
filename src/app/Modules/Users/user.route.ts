import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
import { UserController } from './users.controller';

const router = express.Router();
router.post(
  '/create-user',
  validateRequest(UserValidation.createZodSchema),
  UserController.createUser
);

export const UserRoutes = router;
