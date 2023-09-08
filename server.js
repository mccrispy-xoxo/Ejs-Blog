const express = require("express");
const mongoose = require('mongoose')
const app = express();
const articlesRouter = require("./routes/articles");

mongoose.connect('mongodb://localhost/blog',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "Two Article",
      createdAt: new Date(),
      description: "Two description",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articlesRouter);
app.listen(5000);
