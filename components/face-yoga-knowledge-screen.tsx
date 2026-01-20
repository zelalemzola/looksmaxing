"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { QuizAnswers } from "@/types/quiz";

export interface FaceYogaKnowledgeScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

const knowledgeOptions = [
  { value: "not-sure", label: "Not sure" },
  { value: "few-things", label: "I know a few things" },
  { value: "everything", label: "Yes, I know everything about it" },
];

export function FaceYogaKnowledgeScreen({
  onNext,
  onBack,
}: FaceYogaKnowledgeScreenProps) {
  const [selectedKnowledge, setSelectedKnowledge] = useState<string>("");

  const handleNext = () => {
    if (selectedKnowledge) {
      onNext({ faceYogaKnowledge: selectedKnowledge });
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

      <div className="flex-1 flex flex-col px-6 pt-1">
        <div className="w-full max-w-lg mx-auto space-y-3">
          <div className="text-center space-y-1">
            <h1 className="text-xl font-bold text-gray-900">
              Have you heard about
              <br />
              Face Yoga before?
            </h1>
          </div>

          <div className="space-y-2">
            {knowledgeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedKnowledge(option.value)}
                className={`w-full p-3 rounded-2xl border-2 transition-all text-left ${
                  selectedKnowledge === option.value
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

        {/* Continue Button */}
        <div className="mt-4 pb-4">
          <button
            onClick={handleNext}
            disabled={!selectedKnowledge}
            className={`w-full max-w-lg mx-auto block py-3 px-6 rounded-full font-semibold transition-opacity ${
              selectedKnowledge
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
