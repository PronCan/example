// 실행 => node index.js
 
// nodemon index.js

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const executeQuery = require('./db.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    const data = await executeQuery('select * from news', []);
    res.json(data);
})

app.post('/', async (req, res) => {
    const name = req.body.name,
        content = req.body.content,
        date = req.body.date;

    const data = await executeQuery('insert into news (name,content,date) values (?,?,?)', [name, content, date]);

    const result = await executeQuery('select * from news', []);
    res.json(result);
})

app.delete('/:id', async (req, res) => {
    const id = req.params.id
    console.log('serverid', id)
    const data = await executeQuery('delete from news where id=?', [id]);
    const result = await executeQuery('select * from news', []);
    res.json(result);
})

app.listen(4000, () => {
    console.log('ready')
})

