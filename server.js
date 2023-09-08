const express = require("express");
const mongoose = require('mongoose');
const Article = require("./models/articles")
const methodOverride = require("method-override")
const app = express();
const articlesRouter = require("./routes/articles");

mongoose.connect('mongodb://127.0.0.1/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
}).then(() => {
  console.log('MongoDB Connected');
}).catch((err) => {
  console.log('MongoDB Connection Error: ', err);
});


app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.get("/", async(req, res) => {
  const articles =await Article.find().sort({createdAt: 'desc'})
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articlesRouter);
app.listen(5000);
