"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { QuizAnswers } from "@/types/quiz";

export interface SkinTypeDescriptionScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

const skinTypes = [
  {
    value: "normal",
    label: "Normal",
    description: "Normal skin is well balanced: neither too oily nor too dry",
  },
  {
    value: "dry",
    label: "Dry",
    description: "Dry skin feels tight and may appear flaky or rough",
  },
  {
    value: "oily",
    label: "Oily",
    description: "Oily skin appears shiny and may be prone to breakouts",
  },
  {
    value: "combination",
    label: "Combination",
    description: "Combination skin has both oily and dry areas",
  },
];

export function SkinTypeDescriptionScreen({
  onNext,
  onBack,
}: SkinTypeDescriptionScreenProps) {
  const [selectedType, setSelectedType] = useState<string>("normal");
  const [hoveredType, setHoveredType] = useState<string>("");

  const handleNext = () => {
    onNext({ skinType: selectedType });
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

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-lg space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">
              How would you describe
              <br />
              your skin?
            </h1>
          </div>

          <div className="space-y-4">
            {skinTypes.map((type) => {
              const showDescription =
                selectedType === type.value || hoveredType === type.value;

              return (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  onMouseEnter={() => setHoveredType(type.value)}
                  onMouseLeave={() => setHoveredType("")}
                  className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                    selectedType === type.value
                      ? "border-orange-400 bg-orange-50"
                      : "border-gray-200 bg-white hover:border-orange-200"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {showDescription && (
                      <div className="w-4 h-4 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">
                        {type.label}
                      </div>
                      {showDescription && (
                        <div className="text-sm text-gray-600 mt-1">
                          {type.description}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white py-4 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
