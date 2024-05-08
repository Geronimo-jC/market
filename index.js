import express from 'express';
const app = express()

import staticFile from "./middleware/staticFile.js";
import engine from './middleware/engine.js';
import views from './middleware/views.js';

staticFile(app);
engine(app);
views(app);

import index from './routes/index.js';

app.use('/',index);

app.listen(3000,()=>{
    console.log('Listen on port 3000');
})