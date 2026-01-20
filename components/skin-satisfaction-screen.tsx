"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { QuizAnswers } from "@/types/quiz";

export interface SkinSatisfactionScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

const satisfactionOptions = [
  {
    value: "satisfied",
    label: "Yes, I just want to keep this result forever",
    emoji: "😊",
  },
  {
    value: "small-improvements",
    label: "Not really, I still need some small improvements",
    emoji: "😐",
  },
  {
    value: "many-problems",
    label: "No, I have a lot of skin problems",
    emoji: "😔",
  },
];

export function SkinSatisfactionScreen({
  onNext,
  onBack,
}: SkinSatisfactionScreenProps) {
  const [selectedSatisfaction, setSelectedSatisfaction] = useState<string>("");

  const handleNext = () => {
    if (selectedSatisfaction) {
      onNext({ skinSatisfaction: selectedSatisfaction });
    }
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
          <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center text-sm font-semibold">
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

      <div className="flex-1 flex flex-col px-6 pt-1">
        <div className="w-full max-w-lg mx-auto space-y-3">
          <h1 className="text-xl font-bold text-gray-900 text-center leading-tight">
            Are you generally satisfied
            <br />
            with your skin condition
            <br />
            today?
          </h1>

          <div className="space-y-2">
            {satisfactionOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedSatisfaction(option.value)}
                className={`w-full p-3 rounded-2xl border-2 transition-all text-left flex items-center gap-3 ${
                  selectedSatisfaction === option.value
                    ? "border-orange-400 bg-orange-50"
                    : "border-gray-200 bg-white hover:border-orange-200"
                }`}
              >
                <span className="text-xl">{option.emoji}</span>
                <span className="font-medium text-gray-900 text-sm leading-tight">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-4 pb-4">
          <button
            onClick={handleNext}
            disabled={!selectedSatisfaction}
            className={`w-full max-w-lg mx-auto block py-3 px-6 rounded-full font-semibold transition-opacity ${
              selectedSatisfaction
                ? "bg-gradient-to-r from-orange-400 to-red-400 text-white hover:opacity-90"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
