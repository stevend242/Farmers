"use client";

import { CoreMessage } from "ai";
import { readStreamableValue } from "ai/rsc";
import { AlertCircle, Upload } from 'lucide-react';
import React, { useState } from 'react';
import Markdown from "react-markdown";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { continueConversation } from '~/server/action/actions';

export default function CropDiseasePredictor() {
  const [conversation, setConversation] = useState<CoreMessage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [prediction, setPrediction] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function getBase64(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result as string);
      };
    });
  }

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('File size should not exceed 10MB');
        return;
      }
      try {
        const base64Image = await getBase64(file);
        setSelectedImage(base64Image);
        setError('');
      } catch (err) {
        setError('Error processing the image. Please try again.');
        console.error(err);
      }
    }
  };

  const predictDisease = async () => {
    if (!selectedImage) {
      setError('Please select an image first.');
      return;
    }
    setLoading(true);
    setError('');
    setPrediction('');

    try {
      const pureBase64 = selectedImage.replace(/^data:image\/\w+;base64,/, "");
      const userMessage: CoreMessage = {
        role: "user",
        content: [
          { type: "text", text: "Analyze this crop image for diseases and provide a detailed explanation:" },
          { type: "image", image: pureBase64 }
        ],
      };

      const { messages, newMessage } = await continueConversation([...conversation, userMessage]);

      let predictionText = "";
      for await (const delta of readStreamableValue(newMessage)) {
        predictionText = `${predictionText}${delta}`;
        setPrediction(predictionText);
      }

      setConversation([
        ...messages,
        {
          role: "assistant",
          content: predictionText,
        },
      ]);
    } catch (err) {
      setError('An error occurred while analyzing the image. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center gap-6 min-h-screen ">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="bg-green-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Crop Disease Predictor</CardTitle>
          <CardDescription className="text-green-100">Upload an image of your crop for disease analysis</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <label htmlFor="image-upload" className="w-full">
              <div className="border-2 border-dashed border-green-300 rounded-lg p-4 text-center cursor-pointer hover:bg-green-50 transition duration-300">
                <Upload className="mx-auto h-12 w-12 text-green-500" />
                <p className="mt-1 text-sm text-gray-600">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
              <input id="image-upload" type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
            </label>
            {selectedImage && (
              <div className="mt-4 w-full">
                <img src={selectedImage} alt="Selected crop" className="max-w-full h-auto rounded-lg shadow-md" />
              </div>
            )}
            <Button
              onClick={predictDisease}
              disabled={loading || !selectedImage}
              className="bg-green-500 hover:bg-green-600 text-white w-full"
            >
              {loading ? 'Analyzing...' : 'Predict Disease'}
            </Button>
          </div>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
      {prediction && (
        <Card className="w-full mx-auto shadow-lg">
          <CardHeader className="bg-blue-500 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold">Analysis Result</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 whitespace-pre-wrap"><Markdown>{prediction}</Markdown></p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
