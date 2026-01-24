"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import type { QuizAnswers } from "@/types/quiz";

export interface ImprovementAreasScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

const improvementAreas = [
  "Forehead",
  "Eyes",
  "Mouth",
  "Chin",
  "Cheeks",
  "Jawline",
];

export function ImprovementAreasScreen({
  onNext,
  onBack,
}: ImprovementAreasScreenProps) {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    );
  };

  const handleNext = () => {
    onNext({ improvementAreas: selectedAreas });
  };

  return (
    <div className=" bg-gray-50 flex flex-col">
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

      <div className="flex-1 flex flex-col items-center px-6 pt-2 ">
        <div className="w-full max-w-lg ">
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900">
              What areas would you like
              <br />
              to improve?
            </h1>
          </div>

          <div className="flex items-center  ">
            {/* Face illustration */}
            <div className="flex-shrink-0">
              <div className="w-48 h-80 relative">
                <Image
                  src="/facearea.webp"
                  alt="Face areas"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Options */}
            <div className="flex-1 space-y-3 scale-90">
              {improvementAreas.map((area) => (
                <button
                  key={area}
                  onClick={() => toggleArea(area)}
                  className="w-full flex items-center justify-between p-3 bg-white rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-all text-left"
                >
                  <span className="font-medium text-gray-900">{area}</span>
                  <div
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                      selectedAreas.includes(area)
                        ? "bg-orange-400 border-orange-400"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedAreas.includes(area) && (
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
      </div>

      {/* Continue Button */}
      <div className="pb-2 px-6 ">
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
