"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { QuizAnswers } from "@/types/quiz";

export interface WaterIntakeScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

const waterOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function WaterIntakeScreen({ onNext, onBack }: WaterIntakeScreenProps) {
  const [selectedGlasses, setSelectedGlasses] = useState<number>(0);
  const [hoveredGlasses, setHoveredGlasses] = useState<number>(0);

  const handleNext = () => {
    if (selectedGlasses > 0) {
      onNext({ waterIntake: selectedGlasses });
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
          <div className="text-center space-y-1">
            <h1 className="text-xl font-bold text-gray-900">
              Daily water intake
            </h1>
            <p className="text-gray-600 text-sm">
              How many glasses of water do you drink per day?
            </p>
          </div>

          <div className="grid grid-cols-5 gap-3 justify-items-center">
            {waterOptions.map((glasses) => {
              const isSelected = selectedGlasses >= glasses;
              const isHovered = hoveredGlasses >= glasses && hoveredGlasses > 0;
              const shouldBeBlue =
                isSelected || (isHovered && selectedGlasses === 0);

              return (
                <button
                  key={glasses}
                  onClick={() => setSelectedGlasses(glasses)}
                  onMouseEnter={() => setHoveredGlasses(glasses)}
                  onMouseLeave={() => setHoveredGlasses(0)}
                  className={`w-11 h-14 flex flex-col items-center justify-center rounded-lg transition-all ${
                    selectedGlasses >= glasses
                      ? "bg-blue-100 border-2 border-blue-400"
                      : "bg-white border-2 border-gray-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-5 h-7 rounded-sm relative overflow-hidden transition-all ${
                      shouldBeBlue ? "bg-blue-400" : "bg-orange-300"
                    }`}
                  >
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-5 rounded-sm transition-all ${
                        shouldBeBlue ? "bg-blue-500" : "bg-orange-400"
                      }`}
                    ></div>
                  </div>
                  <span className="text-xs font-semibold text-gray-700 mt-1">
                    {glasses}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-4 pb-4">
          <button
            onClick={handleNext}
            disabled={selectedGlasses === 0}
            className={`w-full max-w-lg mx-auto block py-3 px-6 rounded-full font-semibold transition-opacity ${
              selectedGlasses > 0
                ? "bg-gradient-to-r from-orange-400 to-red-400 text-white hover:opacity-90"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
