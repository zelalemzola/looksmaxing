"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { QuizAnswers } from "@/types/quiz";

export interface DietsScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

const dietOptions = [
  {
    value: "no-specific",
    label: "No specific diet",
    description: "I don't have any dietary restrictions",
  },
  {
    value: "vegetarian",
    label: "Vegetarian",
    description: "I avoid meat, fish, and poultry",
  },
  {
    value: "gluten-free",
    label: "Gluten-free diet",
    description: "I avoid wheat, barley, rye or other grains",
  },
  {
    value: "vegan",
    label: "Vegan",
    description:
      "I avoid all animal-based products: meat, eggs, dairy, etc. Plant based foods only",
  },
  {
    value: "other",
    label: "Other",
  },
];

export function DietsScreen({ onNext, onBack }: DietsScreenProps) {
  const [selectedDiet, setSelectedDiet] = useState<string>("");

  const handleNext = () => {
    if (selectedDiet) {
      onNext({ diet: selectedDiet });
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

      <div className="flex-1 flex flex-col items-center px-6 ">
        <div className="w-full max-w-lg space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Diets</h1>
            <p className="text-gray-600 text-sm">
              Do you follow a specific diet?
            </p>
          </div>

          <div className="space-y-4 scale-85 -mt-20">
            {dietOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedDiet(option.value)}
                className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                  selectedDiet === option.value
                    ? "border-orange-400 bg-orange-50"
                    : "border-gray-200 bg-white hover:border-orange-200"
                }`}
              >
                <div className="font-semibold text-gray-900">
                  {option.label}
                </div>
                {option.description && (
                  <div className="text-sm text-gray-600 mt-1">
                    {option.description}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="pb-8 px-6">
        <button
          onClick={handleNext}
          disabled={!selectedDiet}
          className={`w-full max-w-lg mx-auto block py-4 px-6 rounded-full font-semibold transition-opacity ${
            selectedDiet
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
