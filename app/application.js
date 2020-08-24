require('dotenv').config();

import express from 'express';
import router from './router';
import bodyParser from 'body-parser';
import errorHandler from './middleware/errorHandler';
import cors from './middleware/cors';

const app = express();

if (!process.env.SECRET) {
    console.error("FATAL ERROR: SECRET not provided...");
    process.exit(1);
}

app.use(cors);

app.use(bodyParser.json({
    type: 'application/json'
}));

app.use(router);

app.use(errorHandler);

export default app;