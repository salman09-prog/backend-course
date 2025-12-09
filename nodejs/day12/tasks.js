const express = require("express");
const fs = require("node:fs");

const app = express();

app.use(express.json());

const loggerMiddleware = (req, res, next) => {
  const logData = `${Date.now()} : ${req.method} : ${req.path}\n`;
  fs.appendFile("log.txt", logData, (err) => {
    if (err) console.log(err);
  });
  next();
};

const requestTimeMiddleware = (req, res, next) => {
  console.log((req.requestTime = Date.now()));

  next();
};

const validateBookMiddleware = (req, res, next) => {
  const { title, author, pages } = req.body;

  if (!title || !author || !pages) {
    return res.send("All the fields are required");
  }

  next();
};

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Home route");
});

app.get("/reqtime", requestTimeMiddleware, (req, res) => {
  res.send("Req time");
});

app.post("/books", validateBookMiddleware, (req, res) => {
  const { title, author, pages } = req.body;
  console.log(title, author, pages);
  res.status(201).json({ success: "Book created successfully" });
});

app.post("/about", (req, res) => {
  res.send("About route");
});

app.use((err, req, res, next) => {
  res.send("Error received");
});



app.listen(8000, () => {
  console.log("Server is listening to port 8000");
});
