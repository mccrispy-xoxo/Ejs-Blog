const express = require('express')
const app = express()
const articlesRouter = require('./routes/articles')

app.set('view engine','ejs')

app.use('/articles',articlesRouter)

app.get('/',(req,res) => {
    res.render('index')
})

app.listen(5000)