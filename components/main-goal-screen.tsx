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
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  const handleNext = () => {
    if (selectedGoal) {
      onNext({ goal: selectedGoal });
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

      <div className="flex-1 flex flex-col px-6 pt-1">
        <div className="w-full max-w-lg mx-auto space-y-3">
          <h1 className="text-xl font-bold text-gray-900 text-center">
            What is your <span className="text-orange-400">main goal</span>?
          </h1>

          <div className="space-y-2">
            {goals.map((goal) => (
              <button
                key={goal.value}
                onClick={() => setSelectedGoal(goal.value)}
                className={`w-full p-3 rounded-2xl border-2 transition-all text-left flex items-center gap-3 ${
                  selectedGoal === goal.value
                    ? "border-orange-400 bg-orange-50"
                    : "border-gray-200 bg-white hover:border-orange-200"
                }`}
              >
                <span className="text-xl">{goal.emoji}</span>
                <span className="font-semibold text-gray-900">
                  {goal.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-4 pb-4">
          <button
            onClick={handleNext}
            disabled={!selectedGoal}
            className={`w-full max-w-lg mx-auto block py-3 px-6 rounded-full font-semibold transition-opacity ${
              selectedGoal
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
