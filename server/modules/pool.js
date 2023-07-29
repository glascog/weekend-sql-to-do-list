// set up pool connection

const pg = require('pg') // importing the pg package from node_modules

const pool = new pg.Pool({
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432
})

module.exports = pool