const express = require('express');
const app = express();
const port = 3000;
const budget = require('./models/budget.js');
let style = ""

// express.static middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))

// index route
app.get('/budgets/', (req, res) => {
    let bankAccount = 0
    // res.send('hello - this is the index route')
    budget.forEach((item) => { bankAccount += item.amount })
            if(bankAccount < 0) {
                style = "lowBalance"
            } else if(bankAccount > 1000) {
                style  = "highBalance"
            }
    res.render('index.ejs', {
        allBudgets: budget,
        bankAccount: bankAccount,
        title: 'index',
        style: style,
    })
})



// new route
app.get('/budgets/new', (req, res) => {
    // console.log(req.body)
    res.render('new.ejs')
})

// create route
app.post('/budgets', (req, res) => {
    req.body.amount = parseInt(req.body.amount)
    budget.push(req.body)  
    res.redirect("/budgets");
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