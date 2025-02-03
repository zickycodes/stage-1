import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import {
  isPrime,
  isPerfect,
  isArmstrong,
  getDigitSum,
  getParity,
} from  "./utils/numberUtils"

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API endpointhttp://localhost:3000
app.get("/api/classify-number", async (req: Request, res: Response): Promise<any> => {
  const { number } = req.query;

  // Input validation
  if (!number || isNaN(Number(number))) {
    return res.status(400).json({
      number: number || "undefined",
      error: true,
    });
  }

  const num = parseInt(number as string, 10);

  // Fetch fun fact from Numbers API
  let funFact = "";
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    funFact = response.data;
  } catch (error) {
    funFact = "No fun fact available for this number.";
  }

  // Determine properties
  const properties: string[] = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(getParity(num));

  // Prepare response
  const response = {
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties,
    digit_sum: getDigitSum(num),
    fun_fact: funFact,
  };

  res.status(200).json(response);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});