# Day 4 — Node.js Basics, Runtime, Environment, NPM & Core Modules

### Concepts I learned
- Why Node.js is a **runtime**, not a framework or library  
- Role of **V8** (executes JS) and **libuv** (event loop + async tasks)  
- Browser vs Node.js APIs (`window`, `document`, `alert` vs `fs`, `os`, `http`)  
- Core JS vs Environment APIs (Web APIs vs C++ bindings)  
- `package.json` (requested dependencies) vs `package-lock.json` (exact installed versions)  
- Why `node_modules` should never be pushed to GitHub  
- Why projects still use **axios** even though Node 18+ has built-in `fetch`  
- Using Node CLI, REPL, process arguments, timers, and built-in modules  

### Challenges solved
- Accessing OS info with `os` module  
- Reading CLI args via `process.argv`  
- Timers using Node’s async runtime  
- Reading files using `fs`  
- Creating a minimal HTTP server  

### Notes
- `alert()` is a **Web API**, not part of JavaScript — that’s why it fails in Node  
- `globalThis === global` in Node  
- In Node REPL → `this` === global,  
  but inside a `.js` file → `this` === `{}` (module scope)  
- Node’s `fetch()` exists in v18+, but axios is still used for better ergonomics  
