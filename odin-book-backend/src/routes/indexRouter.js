import express from 'express';
import indexPage from '../controllers/index';
import usersPage from '../controllers/users';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/users', usersPage);

export default indexRouter;
