const express = require('express')
const app = express()
const port = 3001
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    console.log('Getting from /')
    const result = await knex('greetings')
        .select('*');
    res.status(200).json(result);
})

app.post('/', async (req, res) => {
    console.log('Posting from /')
    let data = req.body;

    let result = await knex('greetings')
        .returning('*')
        .insert(data)
        .then(data => data);

    res.status(200).json(result);

})

app.patch('/:id', async (req, res) => {
    console.log('Patching from /')
    let id = parseInt(req.params.id)
    const text = req.body.text;
    knex('greetings')
        .returning('*')
        .where({ id })
        .update({ text })
        .then(result => res.json(result))
})

app.delete('/:id', async (req, res) => {
    console.log('Deleting from /')

    let id = parseInt(req.params.id)

    knex('greetings')
        .returning('*')
        .where({ id })
        .del()
        .then(result => res.json(result))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})