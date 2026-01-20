"use client";

import { useEffect, useState } from "react";
import type { QuizAnswers } from "@/types/quiz";

export interface AnalyzingResponsesScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

const analysisSteps = [
  { label: "Analyzing skin condition", targetProgress: 100, duration: 4000 },
  { label: "Skin Care and Routine", targetProgress: 100, duration: 3000 },
  { label: "Medical Conditions", targetProgress: 54, duration: 2000 },
  { label: "Generating Your Action Plan", targetProgress: 100, duration: 3000 },
];

export function AnalyzingResponsesScreen({
  onNext,
}: AnalyzingResponsesScreenProps) {
  const [progress, setProgress] = useState([0, 0, 0, 0]);
  const [currentStep, setCurrentStep] = useState(0);
  const [allComplete, setAllComplete] = useState(false);

  const animateStep = (stepIndex: number) => {
    if (stepIndex >= analysisSteps.length) {
      setAllComplete(true);
      return;
    }

    const step = analysisSteps[stepIndex];
    const increment = step.targetProgress / (step.duration / 100);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = [...prev];
        if (newProgress[stepIndex] < step.targetProgress) {
          newProgress[stepIndex] = Math.min(
            newProgress[stepIndex] + increment,
            step.targetProgress,
          );
          return newProgress;
        } else {
          clearInterval(timer);
          // Continue to next step after a brief delay
          setTimeout(() => {
            setCurrentStep(stepIndex + 1);
            animateStep(stepIndex + 1);
          }, 800);
          return newProgress;
        }
      });
    }, 100);
  };

  useEffect(() => {
    animateStep(0);
  }, []);

  const handleContinue = () => {
    onNext({});
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-8 relative">
      <div className="w-full max-w-lg space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            Analyzing your responses...
          </h1>
        </div>

        <div className="space-y-6">
          {analysisSteps.map((step, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  {step.label}
                </span>
                {progress[index] >= step.targetProgress && (
                  <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
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
                  </div>
                )}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full transition-all duration-100 ease-out"
                  style={{ width: `${progress[index]}%` }}
                ></div>
              </div>
              {step.targetProgress < 100 &&
                progress[index] === step.targetProgress && (
                  <div className="text-right text-sm font-semibold text-gray-900">
                    {step.targetProgress}%
                  </div>
                )}
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm font-semibold text-gray-900">
            Trusted by over 273 908 clients
          </p>

          <div className="bg-white p-4 rounded-2xl">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              "It's so nicely made, video instruction and fit well together,
              what a joy to join in! It's perfect for my evening routine and it
              doesn't take too much time but feels really effective! Thank you!"
            </p>
            <p className="text-xs font-semibold text-gray-900 mt-2">Nina</p>
          </div>
        </div>

        {allComplete && (
          <button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white py-4 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}
