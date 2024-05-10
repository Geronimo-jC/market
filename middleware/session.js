import session from 'express-session';
import { SECRET } from '../configs.js';

export default (app)=>{
    app.use(session({
        secret: SECRET,
        resave: false,
        saveUninitialized: true
    }));
};