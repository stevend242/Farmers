import { GoogleGenerativeAI } from "@google/generative-ai";
import formidable from 'formidable';
import fs from 'fs';
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

const genAI = new GoogleGenerativeAI("AIzaSyAcODqO3muGpih3AISgU4Dr7hZfFm3GWqU");


export async function POST(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const imageFile = files.image;
    const imagePath = imageFile.filepath;

    // Read the image file
    const imageBytes = fs.readFileSync(imagePath);

    // Use Gemini API to analyze the image
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = "Analyze this image of a crop and identify any potential diseases. Provide a detailed explanation of the symptoms visible, the likely disease(s), and recommend treatment or management practices.";

    const result = await model.generateContent([prompt, imageBytes]);
    const response = await result.response;
    const prediction = response.text();
    console.log(prediction)
    // Clean up the temporary file
    fs.unlinkSync(imagePath);

    NextResponse3.status(200).json({ prediction });
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Failed to process image' });
  }
}
