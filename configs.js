import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gero4316%',
    database: 'salvadora'
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

export { __filename, __dirname, path, connection }