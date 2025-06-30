import { Router } from "express";
import { add, subtract, multiply, divide } from "../calculator/index.js";

const router = Router();

router.post("/calculate", (req, res) => {
  const { a, b, op } = req.body;          // op: "+", "-", "*", "/"
  const numA = Number(a);
  const numB = Number(b);

  try {
    let result;
    switch (op) {
      case "+": result = add(numA, numB); break;
      case "-": result = subtract(numA, numB); break;
      case "*": result = multiply(numA, numB); break;
      case "/": result = divide(numA, numB); break;
      default:  return res.status(400).json({ error: "Invalid operator" });
    }
    res.json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
