const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const { add, subtract, multiply, divide } = require("./index");

// Serve static assets that live in the same folder as index.html (optional)
// If you have CSS or JS files next to index.html, keep this:
app.use(express.static(__dirname));

app.use(express.json());

// API route
app.post("/api/calculate", (req, res) => {
  const { a, b, operation } = req.body;
  const numA = Number(a);
  const numB = Number(b);

  try {
    let result;
    switch (operation) {
      case "add":
        result = add(numA, numB);
        break;
      case "subtract":
        result = subtract(numA, numB);
        break;
      case "multiply":
        result = multiply(numA, numB);
        break;
      case "divide":
        result = divide(numA, numB);
        break;
      default:
        return res.status(400).json({ error: "Invalid operation" });
    }
    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ➡️ Serve index.html from the repo root
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`🧮 Calculator UI + API running at http://localhost:${port}`);
});
