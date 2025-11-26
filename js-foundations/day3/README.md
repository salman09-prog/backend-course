# Day 3 — Loops & Iteration

### Concepts I learned
- while, do…while, and for loops
- for…of (arrays, strings, iterables)
- for…in (object keys, why it’s unsafe for arrays)
- forEach and why it cannot break
- Loop control: break vs continue
- Off-by-one errors (i < length vs i <= length)
- When to use which loop

### Files included
- loops.js
- assignments.txt

### Challenges solved
- Reverse a string manually
- Filter even numbers (no filter())
- Count number of true values
- Extract keys with values > 50
- Stop loop on first negative
- break / continue loop challenges
- for…of, for…in, forEach challenges

### Notes
- for…in returns string indexes & can traverse prototype → not ideal for arrays
- forEach cannot break because callback isn’t the loop
- do…while runs at least once before checking condition
- Always use i < arr.length (avoid <=)
- Prefer for…of for clean array traversal
