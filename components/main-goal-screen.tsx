"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { QuizAnswers } from "@/types/quiz";

export interface MainGoalScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

const goals = [
  { value: "tighten", label: "Tighten skin", emoji: "🎯" },
  { value: "lose-fat", label: "Lose face fat", emoji: "🔥" },
  { value: "wrinkles", label: "Get rid of wrinkles", emoji: "✨" },
];

export function MainGoalScreen({ onNext, onBack }: MainGoalScreenProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const handleGoalToggle = (goalValue: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalValue)
        ? prev.filter((g) => g !== goalValue)
        : [...prev, goalValue],
    );
  };

  const handleNext = () => {
    if (selectedGoals.length > 0) {
      onNext({ goals: selectedGoals });
    }
  };

  return (
    <div className=" bg-gray-50 flex flex-col ">
      {/* Header with back button and progress */}
      <div className="flex items-center justify-between p-4 flex-shrink-0">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center text-sm font-semibold">
            1
          </div>
          <div className="w-6 h-0.5 bg-gray-300"></div>
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

      <div className="flex-1 flex flex-col px-6 pt-1 min-h-0">
        <div className="w-full max-w-lg mx-auto space-y-3 flex-1 flex flex-col">
          <h1 className="text-xl font-bold text-gray-900 text-center">
            What is your <span className="text-orange-400">main goal</span>?
          </h1>
          <p className="text-sm text-gray-500 text-center">
            Select all that apply
          </p>

          <div className="space-y-2 flex-1">
            {goals.map((goal) => (
              <button
                key={goal.value}
                onClick={() => handleGoalToggle(goal.value)}
                className={`w-full p-3 rounded-2xl border-2 transition-all text-left flex items-center gap-3 ${
                  selectedGoals.includes(goal.value)
                    ? "border-orange-400 bg-orange-50"
                    : "border-gray-200 bg-white hover:border-orange-200"
                }`}
              >
                <span className="text-xl">{goal.emoji}</span>
                <span className="font-semibold text-gray-900">
                  {goal.label}
                </span>
                {selectedGoals.includes(goal.value) && (
                  <div className="ml-auto w-5 h-5 rounded-full bg-orange-400 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <div className="pb-4 flex-shrink-0 ">
            <button
              onClick={handleNext}
              disabled={selectedGoals.length === 0}
              className={`w-full py-3 px-6 rounded-full font-semibold transition-opacity ${
                selectedGoals.length > 0
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
