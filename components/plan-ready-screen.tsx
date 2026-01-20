"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { QuizAnswers } from "@/types/quiz";

export interface PlanReadyScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

export function PlanReadyScreen({ onNext }: PlanReadyScreenProps) {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 8,
    seconds: 56,
  });
  const [selectedPlan, setSelectedPlan] = useState("1-month");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  const handleContinue = () => {
    onNext({ planSelection: selectedPlan });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-lg space-y-8">
          {/* Header with countdown */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-4">Luvly</div>
            <div className="text-sm text-gray-600 mb-2">
              68% discount reserved for:
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-4">
              {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </div>

            <button className="bg-gradient-to-r from-orange-400 to-red-400 text-white py-3 px-8 rounded-full font-semibold mb-8">
              Get My Plan
            </button>
          </div>

          {/* Purple refund guarantee banner */}
          <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl p-4 text-white mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm">Complete 4 weeks of your</div>
                <div className="text-sm">Personalized Program and</div>
                <div className="text-sm font-bold">GET A FULL REFUND</div>
              </div>
            </div>
          </div>

          {/* Male before/after results */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 mb-8">
            <div className="flex justify-center gap-4 mb-4">
              <div className="w-32 h-40 relative rounded-2xl overflow-hidden">
                <Image
                  src="/malebefore.webp"
                  alt="Before"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-32 h-40 relative rounded-2xl overflow-hidden">
                <Image
                  src="/maleafter.webp"
                  alt="After"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex justify-between items-center bg-white rounded-xl p-4">
              <div className="text-center flex-1">
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Now
                </div>
                <div className="text-xs text-gray-600">Collagen level</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-orange-400 h-2 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
              <div className="text-center flex-1 ml-4">
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Goal
                </div>
                <div className="text-xs text-gray-600">Collagen level</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-400 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 mb-8">
            458 men bought our plan in the last 1 hour
          </div>

          {/* How it works section */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 mb-8">
            <div className="text-center mb-6">
              <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                4-WEEK LUVLY PROGRAM
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How it works
              </h2>
              <p className="text-sm text-gray-700 mb-2">
                Finish{" "}
                <span className="font-bold">
                  28 days of your Personalized Program
                </span>
                , see your first results, and get your money back.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">
                    1. Complete 4 weeks of your Personalized Program
                  </h3>
                  <p className="text-sm text-gray-600">
                    We know life gets in the way, so you will have 2 months to
                    complete the first 28 days of your program.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">
                    2. Share your results
                  </h3>
                  <p className="text-sm text-gray-600">
                    Contact us{" "}
                    <span className="text-purple-600 underline">here</span>{" "}
                    using the same email address you used for your purchase.
                    Attach screenshots of{" "}
                    <span className="font-semibold">
                      "Weekly Results within the Full Program"
                    </span>{" "}
                    from your Luvly app.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">
                    3. Get your money back
                  </h3>
                  <p className="text-sm text-gray-600">
                    Once we process your request and confirm that you meet the
                    requirements, you will receive a 100% refund for your
                    subscription.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-gray-500 leading-relaxed mt-4">
              If you want to learn more about the Luvly Personalized Program or
              the "Complete Your 4 Week Program and Get a Full Refund" promo,
              please refer to our{" "}
              <span className="text-purple-600 underline">Terms of Use</span>.
            </div>
          </div>

          {/* Plan ready section */}
          <div className="text-center space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Your face yoga plan
              <br />
              is ready!
            </h1>

            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Age</div>
                  <div className="font-semibold text-gray-900">30-39</div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Face yoga level</div>
                  <div className="font-semibold text-gray-900">Beginner</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white py-3 px-6 rounded-full font-semibold">
              The NEW YEAR offer ends in {formatTime(timeLeft.minutes)}:
              {formatTime(timeLeft.seconds)} min
            </div>
          </div>

          {/* Pricing plans */}
          <div className="space-y-4">
            <div
              className={`bg-white rounded-2xl p-4 border-2 cursor-pointer transition-all ${
                selectedPlan === "7-day"
                  ? "border-orange-400"
                  : "border-gray-200"
              }`}
              onClick={() => setSelectedPlan("7-day")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="plan"
                    className="w-4 h-4"
                    checked={selectedPlan === "7-day"}
                    onChange={() => setSelectedPlan("7-day")}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      7-DAY PLAN
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="line-through">$19.96</span> $5.99
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">$0.85</div>
                  <div className="text-xs text-gray-500">per day</div>
                  <div className="text-sm text-orange-600 font-semibold">
                    $2.03
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`bg-white rounded-2xl p-4 border-2 cursor-pointer transition-all relative ${
                selectedPlan === "1-month"
                  ? "border-orange-400"
                  : "border-gray-200"
              }`}
              onClick={() => setSelectedPlan("1-month")}
            >
              <div className="absolute -top-2 left-4 bg-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="plan"
                    className="w-4 h-4"
                    checked={selectedPlan === "1-month"}
                    onChange={() => setSelectedPlan("1-month")}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      1-MONTH PLAN
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="line-through">$22.99</span> $18.99
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">$0.63</div>
                  <div className="text-xs text-gray-500">per day</div>
                  <div className="text-sm text-orange-600 font-semibold">
                    $1.20
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`bg-white rounded-2xl p-4 border-2 cursor-pointer transition-all ${
                selectedPlan === "3-month"
                  ? "border-orange-400"
                  : "border-gray-200"
              }`}
              onClick={() => setSelectedPlan("3-month")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="plan"
                    className="w-4 h-4"
                    checked={selectedPlan === "3-month"}
                    onChange={() => setSelectedPlan("3-month")}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      3-MONTH PLAN
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="line-through">$79.99</span> $28.99
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">$0.32</div>
                  <div className="text-xs text-gray-500">per day</div>
                  <div className="text-sm text-orange-600 font-semibold">
                    $0.86
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white py-4 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Get My Plan
          </button>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The only skincare app
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
