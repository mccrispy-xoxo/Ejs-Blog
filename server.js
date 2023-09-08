const express = require("express");
const mongoose = require('mongoose')
const app = express();
const articlesRouter = require("./routes/articles");

mongoose.connect('mongodb://127.0.0.1/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected');
}).catch((err) => {
  console.log('MongoDB Connection Error: ', err);
});


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
