// package imports
const mysql = require('mysql2/promise');
require('dotenv').config();

// exporting MySQL connection pool object
console.log("asjdkjfalsdkji masdkflak",process.env.MYSQL_HOST )
module.exports = mysql.createPool({
    // host: '172.23.0.1',
    host: process.env.MYSQL_HOST,
    user:'root',
    password:'admin@123',
    database: 'sys',
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit: 0
})