"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { QuizAnswers } from "@/types/quiz";

const PLAN_AMOUNTS: Record<string, number> = {
  "7-day": 5.99,
  "1-month": 18.99,
  "3-month": 28.99,
};

export interface PlanReadyScreenProps {
  onNext: (answers: Partial<QuizAnswers>) => void;
}

export function PlanReadyScreen({ onNext }: PlanReadyScreenProps) {
  const router = useRouter();
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
    // Persist planSelection to sessionStorage for report on payment success (without advancing quiz step)
    if (typeof window !== "undefined") {
      try {
        const stored = sessionStorage.getItem("luvly_quiz_answers");
        const answers = stored ? { ...JSON.parse(stored), planSelection: selectedPlan } : { planSelection: selectedPlan };
        sessionStorage.setItem("luvly_quiz_answers", JSON.stringify(answers));
      } catch {
        // ignore
      }
    }
    const amount = PLAN_AMOUNTS[selectedPlan] ?? 18.99;
    router.push(`/payment?plan=${encodeURIComponent(selectedPlan)}&amount=${amount}`);
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
              <div className="w-36 h-48 relative rounded-2xl overflow-hidden">
                <Image
                  src="/new/firstbeforeafter.png"
                  alt="Before"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-36 h-48 relative rounded-2xl overflow-hidden">
                <Image
                  src="/new/secondbeforeafter.png"
                  alt="After"
                  fill
                  className="object-contain"
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

          {/* Build a consistent beauty routine section */}
          <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Build a consistent
              <br />
              beauty routine
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-sm relative">
                <Image
                  src="/images/consistent-beauty-routine.webp"
                  alt="Consistent beauty routine calendar"
                  width={400}
                  height={300}
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Luvly success stories section */}
          <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Luvly success stories
            </h2>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-center leading-relaxed mb-4">
              "I've been using Luvly for a month and my wrinkles have reduced so
              much. My husband said it's like I'm aging backwards!"
            </p>
            <p className="text-gray-900 font-semibold text-center">
              Lien Da Silva
            </p>
          </div>

          {/* What you get section */}
          <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              What you get
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-2xl">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src="/images/personalized-face-yoga-program.webp"
                    alt="Personalized face yoga program"
                    width={64}
                    height={64}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Personalized face yoga program targeting your problem areas
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-2xl">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src="/images/doublechin.webp"
                    alt="Double chin specialized course"
                    width={64}
                    height={64}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Double chin specialized course to maximize your results
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src="/images/gua-sha.webp"
                    alt="Gua Sha massage course"
                    width={64}
                    height={64}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Gua Sha massage course from Luvly experts
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <Image
                    src="/images/exclusive-video-course.webp"
                    alt="Exclusive video courses"
                    width={64}
                    height={64}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Exclusive video courses about face massage, skincare, and
                    skin health
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Security and support information */}
          <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Your information is safe
                </h3>
                <p className="text-sm text-gray-600">
                  We won't sell or rent your personal contact information for
                  any marketing purposes whatsoever.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Secure checkout
                </h3>
                <p className="text-sm text-gray-600">
                  All information is encrypted and transmitted without risk
                  using a Secure Socket Layer protocol.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Need help?</h3>
                <p className="text-sm text-orange-600 underline cursor-pointer">
                  Contact support
                </p>
              </div>
            </div>
          </div>

          {/* Subscription terms */}
          <div className="text-xs text-gray-500 text-center leading-relaxed mb-8">
            You will be automatically charged $18.99 after the payment
            confirmation. The subscription will then be auto renewed every month
            for $18.99 until you decide to cancel it. You can cancel at any time
            before the renewal. Payments are charged in USD. To learn more,
            visit our <span className="underline">Terms of Use</span> or{" "}
            <span className="underline">contact support</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
