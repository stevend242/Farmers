"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { google } from "@ai-sdk/google";
import { CoreMessage, LanguageModel, streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

export async function continueConversation(history: CoreMessage[]) {
  "use server";

  const stream = createStreamableValue();
  const model = google.chat("models/gemini-1.5-pro-latest");

  (async () => {
    const { textStream } = await streamText({
      model: model,
      messages: history,
    });

    for await (const text of textStream) {
      stream.update(text);
    }

    stream.done();
  })().then(() => { console.log(stream) });

  return {
    messages: history,
    newMessage: stream.value,
  };
}

type CoreUserMessage = {
  role: 'user';
  content: UserContent;
};

type UserContent = string | Array<TextPart$1 | ImagePart>;

interface TextPart$1 {
  type: 'text';
  text: string;
}

interface ImagePart {
  type: 'image';
  /**
Image data. Can either be:

- data: a base64-encoded string, a Uint8Array, an ArrayBuffer, or a Buffer
- URL: a URL that points to the image
   */
  image: DataContent | URL;
  /**
Optional mime type of the image.
   */
  mimeType?: string;
}
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
export async function askAi(prompt: string) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return (text);
}


