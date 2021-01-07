const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const { readItems } = require("./file")

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/items',(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    readItems(({items})=>{
        res.send(JSON.stringify(items))
    })
})

app.get('/api/item/:id',(req,res)=>{
    const id = req.params.id
    res.setHeader('Content-Type', 'application/json');
    readItems((items)=>{
        const extraItems = items.item
        const item = extraItems.find(item => item.id === id)
        res.json(item)
    })
})


app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);