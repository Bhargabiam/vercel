import express from 'express';
import home from './routes/home.js';

const app = express();
const PORT = 3000;

app.use("/home", home);

app.listen(PORT);