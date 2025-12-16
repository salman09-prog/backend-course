const express = require("express");

const app = express();
const PORT = 8000;

app.use(express.json());

const books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
];

app.get("/books", (req, res) => {
  res.setHeader("x-sal", "salman-yusuf-zai");
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: "ID is not valid" });

  const book = books.find((e) => e.id === id);
  if (!book) return res.status(404).json({ error: "Book not found" });

  res.json(book);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || title === "")
    return res.status(404).json({ error: "Title is required" });

  if (!author || author === "")
    return res.status(404).json({ error: "Author is required" });

  const id = books.length + 1;

  const book = { id: id, title: title, author: author };

  books.push(book);

  res.status(201).json({ success: "Book created successfully" });
});

app.delete("/books/:id",(req,res)=>{
    const id = parseInt(req.params.id);

    if(isNaN(id))
        return res.status(400).json({error: "ID is not valid"})

    // const book = books.find(e => e.id === id)

    const index = books.findIndex((book) => book.id === id);

    if(index === -1)
        return res.status(404).json({ error: "Book not found" });

    books.splice(index,1)

    res.status(200).json({success: "Book deleted"})

})
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});
