"use client";

import { useState } from "react";
import Image from "next/image";
import type { QuizAnswers } from "@/types/quiz";

export interface AgeSelectionScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

const ageOptions = [
  { value: "30-39", label: "Age: 30-39", image: "/30-39.webp" },
  { value: "40-49", label: "Age: 40-49", image: "/40-49.webp" },
  { value: "50-59", label: "Age: 50-59", image: "/50-59.webp" },
  { value: "60+", label: "Age: 60+", image: "/60+.webp" },
];

export function AgeSelectionScreen({ onNext }: AgeSelectionScreenProps) {
  const [selectedAge, setSelectedAge] = useState<string>("");

  const handleNext = () => {
    if (selectedAge) {
      onNext({ ageGroup: selectedAge });
    }
  };

  return (
    <div className=" bg-gray-50 flex flex-col ">
      <div className="flex-1 flex flex-col items-center px-6 pt-4 min-h-0">
        <div className="w-full max-w-lg space-y-3 flex-1 flex flex-col">
          <div className="text-center space-y-1 flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              Look younger naturally with
              <br />
              your personal face yoga plan
            </h1>
            <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
              SELECT YOUR AGE
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 flex-1 mx-auto">
            {ageOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedAge(option.value)}
                className={`relative overflow-hidden w-fit rounded-xl transition-all ${
                  selectedAge === option.value ? "ring-2 ring-orange-400" : ""
                }`}
              >
                <div className="w-40 h-40 relative">
                  <Image
                    src={option.image}
                    alt={option.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-2 py-1.5 flex items-center justify-between">
                  <span className="font-semibold text-xs">{option.label}</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          <p className="text-xs text-gray-500 text-center flex-shrink-0">
            By continuing, you agree to:{" "}
            <a href="#" className="underline">
              Terms Of Use
            </a>{" "}
            |{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>

          {/* Continue Button */}
          <div className="pb-4 w-full flex-shrink-0">
            <button
              onClick={handleNext}
              disabled={!selectedAge}
              className={`w-full py-3 px-6 rounded-full font-semibold transition-opacity ${
                selectedAge
                  ? "bg-gradient-to-r from-orange-400 to-red-400 text-white hover:opacity-90"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
