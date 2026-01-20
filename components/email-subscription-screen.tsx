"use client";

import type { QuizAnswers } from "@/types/quiz";

export interface EmailSubscriptionScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

export function EmailSubscriptionScreen({
  onNext,
}: EmailSubscriptionScreenProps) {
  const handleYes = () => {
    onNext({ emailSubscription: "yes" });
  };

  const handleNo = () => {
    onNext({ emailSubscription: "no" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Do you want to receive
            <br />
            emails with <span className="text-orange-400">Face Yoga</span> tips
            <br />
            and Luvly app updates?
          </h1>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleYes}
            className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white py-4 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            YES, I DO
          </button>

          <button
            onClick={handleNo}
            className="w-full text-gray-500 py-2 text-sm hover:text-gray-700 transition-colors"
          >
            I DON'T WANT TO RECEIVE TIPS OR UPDATES
          </button>
        </div>
      </div>
    </div>
  );
}
