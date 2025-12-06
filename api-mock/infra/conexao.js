import mysql from 'mysql2';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123',
    database: 'copa_mundo'
});

conexao.connected();
export default conexao;