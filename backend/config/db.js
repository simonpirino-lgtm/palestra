const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: "root",
  password: "",
  database: "palestra",
/*   ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: true } : false, */
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;

/* # Server
PORT=3000

# Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=corso
DB_PASSWORD=1234
DB_NAME=ecommerce
DB_DIALECT=mysql
DB_LOGGING=false */