const express = require('express');
const app = express();
const port = 3000;
const budget = require('./models/budget.js');

// express.static middleware
app.use(express.static('public'))

// index route
app.get('/budgets/', (req, res) => {
    // res.send('hello - this is the index route')
    res.render('index.ejs', {
        allBudgets: budget,
        title: 'index',
    })
})

// new route
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')
})

// show route
app.get('/budgets/:index', (req, res) => {
    res.send('this is the show route')
})

// create route
app.post('/budgets', (req, res) => {
    
})

app.listen(port, () => {
    console.log('listening')
})