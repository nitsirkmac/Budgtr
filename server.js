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
app.post('/budgets/new', (req, res) => {
    // console.log(req.body)
    res.render('new.ejs')
})

// create route
app.post('/budgets', (req, res) => {
    budget.create(req.body, (error, createdBudget) => {
        res.redirect("/budgets");
    })
})


// show route
app.get('/budgets/:id', (req, res) => {
    res.render('show.ejs', {
        activity: budget[req.params.id]
    })
})



app.listen(port, () => {
    console.log('listening')
})