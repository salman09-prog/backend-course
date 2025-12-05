#Day 10  
## Express Basics, REST Principles & Semantic Versioning

This day covered the foundations of building real-world backend systems using **Express.js**, including routing, controllers, body parsing, REST API design, and SemVer rules.

---

## 🔥 What I Learned

### 1. Why Raw Node.js Becomes Unmaintainable
- Routing becomes one giant `switch/if` block.
- Manual URL parsing, manual body parsing, manual headers.
- Hard to scale, unreadable, and impossible to maintain for large apps.

### 2. Express.js Fundamentals
- Express adds a declarative routing layer over Node’s HTTP server.
- `app.get()`, `app.post()` → removes imperative boilerplate.
- Express automatically handles headers, status codes, and response formatting.

### 3. Body Parsing Explained
- Node delivers request bodies as **streams** of binary chunks.
- Express’s middleware (`express.json()`) buffers → parses → attaches to `req.body`.

### 4. Why Express Is Unopinionated
- Gives full freedom: folder structure, ORMs, template engines, anything.
- Does NOT force MVC or strict architecture — flexible for all team sizes.

### 5. Semantic Versioning (SemVer)
- `Major.Minor.Patch`
- `^4.21.1` updates Patch + Minor, blocks Major.
- Guarantees backward compatibility for safe updates.

### 6. REST API Design Principles
- **Statelessness**: Server never stores session in RAM; client carries token.
- **Client-Server Separation**: Backend sends JSON; frontend handles UI.
- **Uniform Interface**: URLs use nouns + HTTP verbs (`GET /users`).
- **Cacheability**: Responses specify if they can be cached.

---

