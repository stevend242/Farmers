"use client"

import React, { useState } from 'react';
import { Button } from "~/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert"
import { Upload, AlertCircle } from 'lucide-react';

export default function CropDiseasePredictor() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('File size should not exceed 10MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
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
      const formData = new FormData();
      formData.append('image', dataURItoBlob(selectedImage));

      const response = await fetch('/api/predict-disease', {
        method: 'POST',
        body: formData,
      });
      console.log(response)

      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (err) {
      setError('An error occurred while analyzing the image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Helper function to convert Data URI to Blob
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center gap-6 min-h-screen bg-gradient-to-b from-green-100 to-blue-100">
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
        <Card className="w-full max-w-md mx-auto shadow-lg">
          <CardHeader className="bg-blue-500 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold">Analysis Result</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 whitespace-pre-wrap">{prediction}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
