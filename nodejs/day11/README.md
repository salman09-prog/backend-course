# 📚 Bookstore API — Express.js (MVC Architecture)

A Bookstore API built using **Express.js**, implementing dynamic routing, JSON
body parsing, strict ID validation, proper HTTP status handling (400, 404, 201,
200), and clean CRUD operations. The project is refactored into a full **MVC
architecture** with modular routes, controllers, services, and utilities.

The API intentionally uses an **in-memory data store** to demonstrate the
statelessness limitations and scaling issues discussed in the notes (data loss
on restart, memory isolation across server instances).

---

## 🚀 Features Covered (Based on Lecture 33 & 34 Notes)

### 🔹 Routing & Dynamic Params
- `/books/:id` uses dynamic route parameters  
- ID conversion using `parseInt` to avoid the **“String Trap”**  
- Full validation flow:  
  - **400** → Invalid ID  
  - **404** → Book not found  
  - **200** → Successful fetch  

### 🔹 Body Parsing (POST / PUT)
- Uses `app.use(express.json())` to fix the **“Undefined Body Problem”**
- Automatically parses JSON streams and attaches data to `req.body`

### 🔹 CRUD Operations
- **GET /books** — List all  
- **GET /books/:id** — Fetch by ID  
- **POST /books** — Create book  
- **PUT /books/:id** — Update  
- **DELETE /books/:id** — Remove  

### 🔹 Input Validation & Error Handling
- Uses early `return` patterns to prevent the **“Headers already sent”** crash  
- ID validation before processing  
- Title/author validation on POST  

### 🔹 Internal Logic Behavior (From Notes)
- Correct use of `splice()` for deletion  
- Awareness of the **“Duplicate ID Bug”** when generating IDs using
  `books.length + 1`

---

