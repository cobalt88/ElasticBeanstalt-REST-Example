import express from 'express';
import api from './api/index.js';
const app = express();
import dotenv from 'dotenv';
dotenv.config()
const port = process.env.PORT || 3000;

app.use('/api', api);

app.listen(port, () => console.log(`Listening on port ${port}`));