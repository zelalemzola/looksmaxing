"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { QuizAnswers } from "@/types/quiz";

export interface MentalHealthScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

const mentalHealthOptions = [
  "I was stressed",
  "I've had insomnia",
  "I'm suffering from anxiety and PA",
  "I've been feeling depressed",
  "None of the above",
];

export function MentalHealthScreen({
  onNext,
  onBack,
}: MentalHealthScreenProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option],
    );
  };

  const handleNext = () => {
    onNext({ mentalHealth: selectedOptions });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with back button */}
      <div className="flex items-center justify-between p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-lg space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              Other factors like stress, sleep, or
              <br />
              your diet may be affecting your skin.
              <br />
              How has your mental health been
              <br />
              lately?
            </h1>
          </div>

          <div className="space-y-4">
            {mentalHealthOptions.map((option) => (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-all text-left"
              >
                <span className="font-medium text-gray-900">{option}</span>
                <div
                  className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                    selectedOptions.includes(option)
                      ? "bg-orange-400 border-orange-400"
                      : "border-gray-300"
                  }`}
                >
                  {selectedOptions.includes(option) && (
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
