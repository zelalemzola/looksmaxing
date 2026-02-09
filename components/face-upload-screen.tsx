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
      <div className="bg-gray-50 flex flex-col h-screen max-h-[100dvh] overflow-y-hidden">
        <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
          <div className="relative w-80 h-80 mb-8 rounded-2xl overflow-hidden bg-gray-100">
            {/* User's uploaded image - always visible */}
            <img
              src={uploadedImage!}
              alt="Your face"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Light analysis overlay - keep user photo clearly visible */}
            <div className="absolute inset-0 bg-black/5 rounded-2xl flex items-center justify-center pointer-events-none">
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
    <div className="bg-gray-50 flex flex-col h-screen overflow-hidden max-h-[100dvh]">
      {/* Header with back button and progress */}
      <div className="flex items-center justify-between px-2 py-1.5 flex-shrink-0">
        <button onClick={onBack} className="p-2 -m-2">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex items-center gap-1">
          <div className="w-7 h-7 rounded-full bg-orange-400 text-white flex items-center justify-center text-xs font-semibold">
            1
          </div>
          <div className="w-4 h-0.5 bg-orange-400"></div>
          <div className="w-7 h-7 rounded-full bg-orange-400 text-white flex items-center justify-center text-xs font-semibold">
            2
          </div>
          <div className="w-4 h-0.5 bg-gray-300"></div>
          <div className="w-7 h-7 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center text-xs font-semibold">
            3
          </div>
          <div className="w-4 h-0.5 bg-gray-300"></div>
          <div className="w-7 h-7 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center text-xs font-semibold">
            4
          </div>
        </div>
        <div className="w-9"></div>
      </div>

      <div className="flex-1 flex flex-col px-3 pt-0 min-h-0 overflow-hidden">
        <div className="w-full max-w-lg mx-auto flex-1 flex flex-col min-h-0 justify-start pt-1">
          {/* Title – minimal space below */}
          <div className="text-center flex-shrink-0 mb-12 mt-5">
            <h1 className="text-base font-bold text-gray-900">
              Upload Your <span className="text-orange-400">Face Photo</span>
            </h1>
            <p className="text-[16px] text-gray-500 mt-0.5">
              We analyze your face for a personalized plan
            </p>
          </div>

          {/* Upload area – compact, no extra vertical space */}
          <div className="flex-shrink-0 mt-4 mb-10">
            {uploadedImage ? (
              <div className="relative mx-auto w-full max-w-[180px] aspect-square">
                <img
                  src={uploadedImage}
                  alt="Uploaded face"
                  className="w-full h-full rounded-xl shadow-lg object-cover"
                />
                <button
                  onClick={triggerFileInput}
                  type="button"
                  className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-gray-50"
                >
                  <Camera className="w-3.5 h-3.5 text-gray-600" />
                </button>
              </div>
            ) : (
              <div
                onClick={triggerFileInput}
                className="border-2 border-dashed border-gray-300 rounded-xl py-3 px-4 text-center cursor-pointer hover:border-orange-300 hover:bg-orange-50 transition-colors"
              >
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-9 h-9 bg-orange-100 rounded-full flex items-center justify-center">
                    <Upload className="w-4 h-4 text-orange-400" />
                  </div>
                  <p className=" font-semibold text-gray-900">Tap to upload</p>
                  <p className="text-[15px] text-gray-400">JPG, PNG · face visible</p>
                </div>
              </div>
            )}
          </div>

          {/* Tips + button – right under upload, tight spacing */}
          <div className="flex-shrink-0 mt-1 pb-2">
            <p className="text-[11px] text-blue-800 text-center mb-1.5">
              📸 Face camera, good light, no glasses
            </p>
            <button
              onClick={handleNext}
              disabled={!uploadedImage}
              type="button"
              className={`w-full py-2.5 px-4 rounded-full font-semibold text-sm ${
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
