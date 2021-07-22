import { Router } from 'express';
import { DataTypes } from 'sequelize';
import db from '../../config/database';
import bcrypt from 'bcrypt';
import { jwtService } from '../../libs';
import { auth } from '../../middlewares';

import UserDao from './user.dao'
import UserRepository from './user.repository';
import UserService from './user.service';
import UserController from './user.controller';
import UserRouter from './user.router';

const router = Router();
const userDao = UserDao.init(db.sequelize, DataTypes);
const userRepository = new UserRepository(userDao);
const userService = new UserService(userRepository);
const userController = new UserController({userService, jwt: jwtService, bcrypt});
const userRouter = new UserRouter({router, userController, auth});

export { userService, UserDao};

export default userRouter;