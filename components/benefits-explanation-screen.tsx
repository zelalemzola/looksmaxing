"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export interface BenefitsExplanationScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export function BenefitsExplanationScreen({
  onNext,
  onBack,
}: BenefitsExplanationScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with back button */}
      <div className="flex items-center justify-between p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 pt-0 -mt-10">
        <div className="w-full max-w-lg space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
              With Luvly every{" "}
              <span className="text-orange-400">
                face ages
                <br />
                gracefully
              </span>
            </h1>
            <p className="text-gray-600 text-sm">
              See how we will help you reach your goals:
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 space-y-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Image
                  src="/facearea.webp"
                  alt="Face training"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Daily face trainings
                </h3>
                <p className="text-sm text-gray-600">focused on your goals</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Image
                  src="/yourprogram.webp"
                  alt="Skincare products"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Skincare products
                </h3>
                <p className="text-sm text-gray-600">
                  recommendations for
                  <br />
                  your skin & issues
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Cosmetics scanner
                </h3>
              </div>
            </div>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white py-4 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
