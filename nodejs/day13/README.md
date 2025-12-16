DAY 13 :- 

Modules, Refactoring & MVC — Clean Architecture Foundations
This day focused on breaking single-file Node.js apps into scalable modules, refactoring Express APIs for maintainability, and understanding MVC as a real architectural pattern (not just folders).

WHAT I LEARNED

1. Why Single-File Apps Fail
Putting everything inside index.js leads to:
• Messy, unreadable code
• Hard debugging
• No separation of concerns
• Zero scalability as routes and features grow

Solution: Split code into user-defined modules.

2. User-Defined Modules (Node.js Internals)
Every file in Node.js is a PRIVATE scope.
Code is wrapped internally using the Module Wrapper Function:
(function (exports, require, module, __filename, __dirname) {})

Nothing is shared unless explicitly exported.

Export styles:
• Named Exports → exports.fn = ...
• Default Export → module.exports = ...

Rule: Do NOT mix both in one file.

3. require() Resolution Rules
require('express') → built-in or node_modules
require('./file') → current directory (user-defined)
require('../file') → parent directory

Relative paths are mandatory for local modules.

4. Refactoring = Structural Change Only
Refactoring changes HOW code is organized,
NOT what the code does.

Goal:
• Smaller files
• Clear responsibility
• Easier maintenance
• Team scalability

5. Express Router = Mini Application
express.Router() creates an isolated routing unit.
Used to move routes out of index.js cleanly.

Mounting:
app.use('/books', bookRouter)

Prefix (/books) is stripped before router runs.
Inside router, paths start from '/'.

6. Modular Architecture Breakdown
/routes → URL mapping only
/controllers → business logic
/models → data layer (DB / mock DB)
/middlewares → reusable utilities
/index.js → entry point only

index.js should stay CLEAN.

7. MVC Architecture (Real Meaning)
MVC is NOT about folders.
MVC is about Separation of Concerns.

Model → data & database logic
Controller → decision-making & flow
View → JSON response / frontend consumer

Request Flow:
Request → Router → Controller → Model → Response

8. Why Routes Must Stay Thin
Routes should only delegate.
Business logic inside routes causes:
• Duplication
• Security bugs
• Painful DB migrations
• Unscalable codebases

Controllers exist to prevent this.

END OF DAY — MODULES, REFACTORING & MVC
