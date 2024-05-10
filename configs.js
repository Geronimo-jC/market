import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PASSWORD_DB = process.env.PASSWORD_DB;
const NAME_DB = process.env.NAME_DB;
const USSER_DB = process.env.USSER_DB;
const HOST_DB = process.env.HOST_DB;
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;

const createConnection = ()=>{
    return mysql.createConnection({
        host: HOST_DB,
        user: USSER_DB,
        password: PASSWORD_DB,
        database: NAME_DB
    });
}

export { __filename, __dirname, path, createConnection, PORT, SECRET }