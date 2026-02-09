"use client";

import { useState, useEffect } from "react";
import type { QuizAnswers } from "@/types/quiz";

const QUIZ_ANSWERS_KEY = "luvly_quiz_answers";

export interface FinalEmailCollectionScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  faceImage?: string | null;
}

export function FinalEmailCollectionScreen({
  onNext,
  faceImage: faceImageProp,
}: FinalEmailCollectionScreenProps) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [storedFaceImage, setStoredFaceImage] = useState<string | null>(null);
  const faceImage = faceImageProp ?? storedFaceImage;

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = sessionStorage.getItem(QUIZ_ANSWERS_KEY);
      if (raw) {
        const data = JSON.parse(raw) as { faceImage?: string };
        if (data.faceImage) setStoredFaceImage(data.faceImage);
      }
    } catch {
      // ignore
    }
  }, [faceImageProp]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleNext = () => {
    if (isValid) {
      onNext({ email });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-md space-y-6">
        {/* Small creative avatar on top */}
        {faceImage && (
          <div className="flex justify-center">
            <div className="relative">
              <div className="p-0.5 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-red-400 shadow-lg shadow-orange-200/50">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white bg-gray-100">
                  <img
                    src={faceImage}
                    alt="Your face"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-medium text-orange-600 bg-white/90 px-1.5 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                Your plan
              </span>
            </div>
          </div>
        )}

        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Your action plan is ready!
          </h1>
          <p className="text-gray-600 text-sm">
            Enter your email to get started
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <label className="block text-xs text-gray-500 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
            {isValid && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 mt-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>

          <div className="text-center text-xs text-gray-500 leading-relaxed">
            Your information is 100% secure.
            <br />
            Luvly does not share your personal information with
            <br />
            third parties.
          </div>

          <button
            onClick={handleNext}
            disabled={!isValid}
            className={`w-full py-4 px-6 rounded-full font-semibold transition-opacity ${
              isValid
                ? "bg-gradient-to-r from-orange-400 to-red-400 text-white hover:opacity-90"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Get my Plan
          </button>
        </div>
      </div>
    </div>
  );
}
