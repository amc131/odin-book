import express from 'express';
import router from './routes/indexRouter';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/index', router);

export default app;
