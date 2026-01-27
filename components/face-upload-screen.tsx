"use client";

import { useState, useRef } from "react";
import { ArrowLeft, Camera, Upload } from "lucide-react";
import type { QuizAnswers } from "@/types/quiz";

export interface FaceUploadScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

export function FaceUploadScreen({ onNext, onBack }: FaceUploadScreenProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (uploadedImage) {
      setIsAnalyzing(true);
      // Simulate analysis time
      setTimeout(() => {
        onNext({ faceImage: uploadedImage });
      }, 3000);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (isAnalyzing) {
    return (
      <div className="bg-gray-50 flex flex-col h-screen">
        <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
          <div className="relative w-80 h-80 mb-8">
            {/* Uploaded image */}
            <img
              src={uploadedImage!}
              alt="Your face"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Analysis overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl flex items-center justify-center">
              {/* Scanning lines */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse opacity-60"></div>
                <div
                  className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse opacity-40"
                  style={{ top: "30%", animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse opacity-50"
                  style={{ top: "60%", animationDelay: "1s" }}
                ></div>
              </div>

              {/* Analysis points */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-70"></div>
              <div
                className="absolute top-8 right-6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-60"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping opacity-60"
                style={{ animationDelay: "0.6s" }}
              ></div>
              <div
                className="absolute bottom-6 right-4 w-2 h-2 bg-red-400 rounded-full animate-ping opacity-70"
                style={{ animationDelay: "0.9s" }}
              ></div>
            </div>

            {/* Machine-like border */}
            <div className="absolute inset-0 border-2 border-orange-400 rounded-2xl animate-pulse opacity-60"></div>

            {/* Floating analysis components around the image */}
            <div className="absolute -top-12 -left-16 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-md animate-bounce text-xs opacity-80">
              <span className="text-orange-600">Skin texture</span>
            </div>
            <div
              className="absolute -top-8 -right-20 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-md animate-bounce text-xs opacity-80"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-blue-600">Face shape</span>
            </div>
            <div
              className="absolute top-1/4 -left-24 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-md animate-bounce text-xs opacity-80"
              style={{ animationDelay: "1s" }}
            >
              <span className="text-green-600">Symmetry</span>
            </div>
            <div
              className="absolute top-1/2 -right-24 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-md animate-bounce text-xs opacity-80"
              style={{ animationDelay: "1.5s" }}
            >
              <span className="text-purple-600">Concerns</span>
            </div>
            <div
              className="absolute bottom-1/4 -left-20 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-md animate-bounce text-xs opacity-80"
              style={{ animationDelay: "2s" }}
            >
              <span className="text-pink-600">Tone</span>
            </div>
            <div
              className="absolute -bottom-8 -right-16 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-md animate-bounce text-xs opacity-80"
              style={{ animationDelay: "2.5s" }}
            >
              <span className="text-indigo-600">Features</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Analyzing Your Face
            </h2>
            <p className="text-gray-600">
              Our AI is examining your facial features to create a personalized
              plan...
            </p>

            {/* Loading spinner */}
            <div className="mt-6 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-400"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 flex flex-col h-screen">
      {/* Header with back button and progress */}
      <div className="flex items-center justify-between p-4 flex-shrink-0">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center text-sm font-semibold">
            1
          </div>
          <div className="w-6 h-0.5 bg-orange-400"></div>
          <div className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center text-sm font-semibold">
            2
          </div>
          <div className="w-6 h-0.5 bg-gray-300"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center text-sm font-semibold">
            3
          </div>
          <div className="w-6 h-0.5 bg-gray-300"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center text-sm font-semibold">
            4
          </div>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 flex flex-col px-6 pt-1 min-h-0">
        <div className="w-full max-w-lg mx-auto space-y-6 flex-1 flex flex-col">
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900">
              Upload Your <span className="text-orange-400">Face Photo</span>
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Help us analyze your facial features for a personalized plan
            </p>
          </div>

          {/* Upload area */}
          <div className="flex-1 flex flex-col justify-center">
            {uploadedImage ? (
              <div className="relative">
                <img
                  src={uploadedImage}
                  alt="Uploaded face"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
                />
                <button
                  onClick={triggerFileInput}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                >
                  <Camera className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            ) : (
              <div
                onClick={triggerFileInput}
                className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center cursor-pointer hover:border-orange-300 hover:bg-orange-50 transition-colors"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Upload a clear photo
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Make sure your face is well-lit and clearly visible
                    </p>
                  </div>
                  <div className="text-xs text-gray-400">
                    JPG, PNG up to 10MB
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tips */}
          <div className="bg-blue-50 rounded-xl p-4 space-y-2">
            <h3 className="font-semibold text-blue-900 text-sm">
              📸 Photo Tips:
            </h3>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• Face the camera directly</li>
              <li>• Use good lighting</li>
              <li>• Remove glasses if possible</li>
              <li>• Keep a neutral expression</li>
            </ul>
          </div>

          {/* Continue Button */}
          <div className="pb-4 flex-shrink-0">
            <button
              onClick={handleNext}
              disabled={!uploadedImage}
              className={`w-full py-3 px-6 rounded-full font-semibold transition-opacity ${
                uploadedImage
                  ? "bg-gradient-to-r from-orange-400 to-red-400 text-white hover:opacity-90"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Analyze My Face
            </button>
          </div>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
}
