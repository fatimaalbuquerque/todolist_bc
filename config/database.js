const mysql = require('mysq12/promise');

const pool = mysql.createPool({
    host: 'localhost',
    
});

module.exports = pool;