const express = require('express')
const app = express()
const port = 3001
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);
const cors = require('cors')

app.use(cors())

app.get('/', async (req, res) => {
    console.log('Getting from /')
    const result = await knex('greetings')
        .select('*');

    res.status(200).json(result);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})