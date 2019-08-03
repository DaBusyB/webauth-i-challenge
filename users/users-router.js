const router = require('express').Router()
const knex = require('knex')

const knexConfig =  {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/users.db3',
    },
    //debug: true,
};

const db = knex(knexConfig)

router.get('/', (req, res) => {

    db('users')
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router