"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { QuizAnswers } from "@/types/quiz";

export interface FocusAreasScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

const focusAreas = [
  "Face sculpting",
  "Fresh complexion",
  "Lift hooded eyelids",
  "Collagen boost",
  "Consistent routine",
  "Even skin tone",
  "Get rid of dark circles",
  "Face lifting",
  "Reduce puffiness",
  "Double chin reduction",
];

export function FocusAreasScreen({ onNext, onBack }: FocusAreasScreenProps) {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    );
  };

  const handleNext = () => {
    onNext({ focusAreas: selectedAreas });
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

      <div className="flex-1 flex flex-col px-6 pt-2">
        <div className="w-full max-w-lg mx-auto space-y-4">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            Choose your focus
          </h1>

          <div className="flex flex-wrap gap-3 justify-center">
            {focusAreas.map((area) => (
              <button
                key={area}
                onClick={() => toggleArea(area)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedAreas.includes(area)
                    ? "bg-blue-100 text-blue-800 border-2 border-blue-300"
                    : "bg-blue-50 text-blue-700 border-2 border-blue-200 hover:border-blue-300"
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-6 pb-6">
          <button
            onClick={handleNext}
            className="w-full max-w-lg mx-auto block bg-gradient-to-r from-orange-400 to-red-400 text-white py-4 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
