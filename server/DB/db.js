const pgp = require('pg-promise')()

const connx = {
    host:'127.0.0.1',
    port: 5432,
    user:'postgres',
    database:'cra',
    password:'Stivearnaud3#'
}

module.exports = pgp(connx)