"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { QuizAnswers } from "@/types/quiz";

export interface MenstrualCycleScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

const cycleOptions = [
  { value: "regular", label: "Regular" },
  { value: "irregular", label: "Irregular" },
  {
    value: "no-cycle",
    label: "I don't have my cycle due to age or medical condition",
  },
  {
    value: "prefer-not-answer",
    label: "I don't know / Prefer not to answer",
  },
];

export function MenstrualCycleScreen({
  onNext,
  onBack,
}: MenstrualCycleScreenProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleNext = () => {
    if (selectedOption) {
      onNext({ menstrualCycle: selectedOption });
    }
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
              During menstruation, the levels of
              <br />
              estrogen and progesterone may
              <br />
              affect your skin's condition. Is your
              <br />
              menstrual cycle regular?
            </h1>
          </div>

          <div className="space-y-4">
            {cycleOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedOption(option.value)}
                className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                  selectedOption === option.value
                    ? "border-orange-400 bg-orange-50"
                    : "border-gray-200 bg-white hover:border-orange-200"
                }`}
              >
                <span className="font-medium text-gray-900">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="pb-8 px-6">
        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className={`w-full max-w-lg mx-auto block py-4 px-6 rounded-full font-semibold transition-opacity ${
            selectedOption
              ? "bg-gradient-to-r from-orange-400 to-red-400 text-white hover:opacity-90"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
