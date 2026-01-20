"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { QuizAnswers } from "@/types/quiz";

export interface SkinConcernsScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

const skinConcerns = [
  "Acne and pimples",
  "Redness",
  "Dullness",
  "Rough texture",
  "Uneven skin tone",
];

export function SkinConcernsScreen({
  onNext,
  onBack,
}: SkinConcernsScreenProps) {
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);

  const toggleConcern = (concern: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(concern)
        ? prev.filter((c) => c !== concern)
        : [...prev, concern],
    );
  };

  const handleNext = () => {
    onNext({ skinConcerns: selectedConcerns });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with back button and progress */}
      <div className="flex items-center justify-between p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center text-sm font-semibold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="w-6 h-0.5 bg-orange-400"></div>
          <div className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center text-sm font-semibold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
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

      <div className="flex-1 flex flex-col items-center px-6 pt-2">
        <div className="w-full max-w-lg space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">
              Do you have any of the
              <br />
              following skin concerns?
            </h1>
          </div>

          <div className="space-y-4">
            {skinConcerns.map((concern) => (
              <button
                key={concern}
                onClick={() => toggleConcern(concern)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-all text-left"
              >
                <span className="font-medium text-gray-900">{concern}</span>
                <div
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                    selectedConcerns.includes(concern)
                      ? "bg-orange-400 border-orange-400"
                      : "border-gray-300"
                  }`}
                >
                  {selectedConcerns.includes(concern) && (
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
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="pb-8 px-6">
        <button
          onClick={handleNext}
          className="w-full max-w-lg mx-auto block py-4 px-6 rounded-full font-semibold bg-gradient-to-r from-orange-400 to-red-400 text-white hover:opacity-90 transition-opacity"
        >
          Next
        </button>
      </div>
    </div>
  );
}
