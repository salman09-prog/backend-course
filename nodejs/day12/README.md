# Day 12
## Express Middleware — Internals, Execution Flow & Advanced Scopes

This day focused on mastering how Express processes requests internally using middleware, how flow control works with `next()`, and how to correctly apply global, path-level, and route-level middleware in real applications.

------------------------------------------------------------

## WHAT I LEARNED

### 1. Middleware = Function Between Request and Route
- Express maintains an internal STACK of functions.
- Each incoming request travels through this stack in order.
- Middleware receives (req, res, next).
- It can:
    - Execute code
    - Modify req/res
    - End the response immediately
    - Or pass control via next()
- Missing next() or res.send() = request hangs forever.

------------------------------------------------------------

### 2. Internal Execution Flow
- `express()` creates a request listener with an ordered middleware stack.
- Execution flows TOP → BOTTOM.
- A route handler is just another middleware that usually terminates the cycle.
- Middlewares defined after a route do NOT run if the route sends a response.

------------------------------------------------------------

### 3. Middleware Superpowers (Core Abilities)
A. Execute arbitrary logic (logging, DB operations, calculations)  
B. Mutate req/res (attach user data, modify headers)  
C. Terminate cycle early (authorization failures, blocked IPs, invalid payload)  
D. Call next() to continue to the next function  

------------------------------------------------------------

### 4. Correct vs Incorrect Middleware Usage

Incorrect (hangs):
    app.use((req, res, next) => {
        console.log("Received");
        // Missing next() or response
    });

Correct (passes control):
    app.use((req, res, next) => {
        console.log("Time:", Date.now());
        next();
    });

Guard pattern:
    if (!allowed) return res.status(403).send("Forbidden");
    next();

------------------------------------------------------------

### 5. Logging Middleware (Async Only)
- Never use blocking I/O like appendFileSync.
- Use fs.appendFile (async) and immediately call next().

Example:
    fs.appendFile("log.txt", data, err => {});
    next();

------------------------------------------------------------

### 6. Middleware Scopes

GLOBAL MIDDLEWARE
-----------------
- Runs on every request.
- Must be defined BEFORE routes.
- Example use cases: logging, express.json(), security headers.

PATH-SPECIFIC GLOBAL MIDDLEWARE
-------------------------------
    app.use('/admin', fn)
- Matches ALL HTTP methods.
- Prefix matcher: /admin, /admin/x, /admin/y/z.
- Great for grouping authorization logic.

ROUTE-LEVEL MIDDLEWARE
----------------------
    app.get('/premium', checkVIP, handler)
- Most precise control.
- Enables chained logic:
    isLoggedIn → validateData → authorize → controller

------------------------------------------------------------

### 7. “Everything is Middleware”
- Express does not differentiate between “middleware” and “route handler”.
- Both are functions in the request pipeline.
- Only difference: route handlers typically END the response.

------------------------------------------------------------

### 8. Express 5 — Async Error Handling Fix
Express 4:
    - async/await errors were NOT automatically caught.

Express 5:
    - Automatically forwards rejected promises to the error handler.

Example:
    app.get('/users', async (req, res) => {
        const users = await db.getUsers(); // rejection auto-caught
        res.json(users);
    });

------------------------------------------------------------

END OF DAY 12 — MIDDLEWARE NOTES.
