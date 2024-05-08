import express from 'express';
import { PORT } from './configs.js';

import staticFile from "./middleware/staticFile.js";
import engine from './middleware/engine.js';
import views from './middleware/views.js';
import json from './middleware/json.js';

import index from './routes/index.js';

const app = express()

staticFile(app);
engine(app);
views(app);
json(app);

app.use('/',index);

app.listen(PORT,()=>{
    console.log('Listen on port 3000');
})