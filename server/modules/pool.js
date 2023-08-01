// set up pool connection

const pg = require('pg') // importing the pg package from node_modules
let pool;

if(process.env.DATABASE_URL) {
    connectionString: process.env.DATABASE_URL;
    ssl: {
        rejectUnauthorized: false
    }
}
else pool = new pg.Pool({
    database: 'weekendtodoapp_6g08',
    host: 'localhost',
    port: 5432
})

module.exports = pool