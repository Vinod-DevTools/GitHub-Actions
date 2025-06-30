import express from "express";
import calcRouter from "./routes/calculator.js";

const app = express();
app.use(express.json());

app.use("/api", calcRouter);      // POST /api/calculate

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Calculator API listening at http://localhost:${PORT}`)
);
