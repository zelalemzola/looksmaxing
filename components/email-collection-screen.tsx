"use client";

import { useState } from "react";
import type { QuizAnswers } from "@/types/quiz";

export interface EmailCollectionScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

export function EmailCollectionScreen({ onNext }: EmailCollectionScreenProps) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

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
      <div className="w-full max-w-md space-y-8">
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
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
            {isValid && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
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
