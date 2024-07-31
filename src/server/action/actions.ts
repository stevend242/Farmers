"use server";
import { GoogleGenerativeAI} from "@google/generative-ai";


export async function fetchFruits() {
  try {
    const response = await fetch("http://127.0.0.1:5000/api/v1/fruits");

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const fruitPrices = await response.json();
    return fruitPrices;
  } catch (error) {
    return error;
  }
}

const genAI = new GoogleGenerativeAI("AIzaSyAcODqO3muGpih3AISgU4Dr7hZfFm3GWqU");
export async function askAi(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return (text);
}


