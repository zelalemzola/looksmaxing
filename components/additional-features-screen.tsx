"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import type { QuizAnswers } from "@/types/quiz";

export interface AdditionalFeaturesScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
  onBack: () => void;
}

const features = [
  {
    id: "progress-tracking",
    title: "Track how my skin progresses over time",
    image: "/whatelsecatchesyoureye1.webp",
    color: "border-red-300 bg-red-50",
  },
  {
    id: "product-check",
    title: "Check if the product is not harmful",
    image: "/whatelsecatchesyoureye2.webp",
    color: "border-orange-300 bg-orange-50",
  },
  {
    id: "beauty-community",
    title: "Build a beauty community",
    image: "/whatelsecatchesyoureye3.webp",
    color: "border-green-300 bg-green-50",
  },
  {
    id: "daily-tips",
    title: "Daily tips",
    image: "/whatelsecatchesyoureye4.webp",
    color: "border-blue-300 bg-blue-50",
  },
];

export function AdditionalFeaturesScreen({
  onNext,
  onBack,
}: AdditionalFeaturesScreenProps) {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((f) => f !== featureId)
        : [...prev, featureId],
    );
  };

  const handleNext = () => {
    onNext({ additionalFeatures: selectedFeatures });
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
            3
          </div>
          <div className="w-6 h-0.5 bg-gray-300"></div>
          <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center text-sm font-semibold">
            4
          </div>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 pt-2">
        <div className="w-full max-w-lg space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-xl font-bold text-gray-900">
              Besides Face Yoga trainings
              <br />
              in your plan, what else
              <br />
              catches your eye?
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-4 -mt-5">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => toggleFeature(feature.id)}
                className={`p-4 rounded-2xl border-2 transition-all text-left ${
                  selectedFeatures.includes(feature.id)
                    ? `${feature.color} border-opacity-100`
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="space-y-3">
                  <div className="w-full h-20 relative">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900 leading-tight">
                    {feature.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="pb-8 px-6 mt-5">
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
