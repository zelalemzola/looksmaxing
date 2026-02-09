"use client";

import { useEffect, useState } from "react";
import type { QuizAnswers } from "@/types/quiz";

const QUIZ_ANSWERS_KEY = "luvly_quiz_answers";

export interface EmailSubscriptionScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  faceImage?: string | null;
}

export function EmailSubscriptionScreen({
  onNext,
  faceImage: faceImageProp,
}: EmailSubscriptionScreenProps) {
  const [storedFaceImage, setStoredFaceImage] = useState<string | null>(null);
  const faceImage = faceImageProp ?? storedFaceImage;

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = sessionStorage.getItem(QUIZ_ANSWERS_KEY);
      if (raw) {
        const data = JSON.parse(raw) as { faceImage?: string };
        if (data.faceImage) setStoredFaceImage(data.faceImage);
      }
    } catch {
      // ignore
    }
  }, [faceImageProp]);

  const handleYes = () => {
    onNext({ emailSubscription: "yes" });
  };

  const handleNo = () => {
    onNext({ emailSubscription: "no" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-md space-y-6">
        {/* Small creative avatar on top */}
        {faceImage && (
          <div className="flex justify-center">
            <div className="relative">
              <div className="p-0.5 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-red-400 shadow-lg shadow-orange-200/50">
                <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-white bg-gray-100">
                  <img
                    src={faceImage}
                    alt="Your face"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-medium text-orange-600 bg-white/90 px-1.5 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                Almost there
              </span>
            </div>
          </div>
        )}

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
