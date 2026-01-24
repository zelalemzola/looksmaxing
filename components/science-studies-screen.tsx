"use client";

import Image from "next/image";

export interface ScienceStudiesScreenProps {
  onNext: () => void;
}

export function ScienceStudiesScreen({ onNext }: ScienceStudiesScreenProps) {
  return (
    <div className=" bg-gray-50 flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-lg space-y-2">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            Reverse your wrinkles with
            <br />
            science and self-care
          </h1>
        </div>

        <div className="flex justify-center mb-8">
          <div className="w-80 h-32 relative">
            <Image
              src="/studiesgraph.svg"
              alt="Studies graph showing improvement"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4 bg-white p-4 rounded-2xl">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src="/experts.webp"
                alt="Harvard Medical School"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                <span className="font-semibold">Harvard Medical School</span>{" "}
                reports that face exercises also help improve muscle tone and
                may reduce some signs of aging such as gravity-related fat loss
                or redistribution on the face.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white p-4 rounded-2xl">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src="/experts.webp"
                alt="Northwestern University"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">
                Dermatologists at{" "}
                <span className="font-semibold">Northwestern University</span>{" "}
                report that face yoga has been proven to make you look 3 years
                younger in 20 weeks.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white py-4 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Next
        </button>
      </div>
    </div>
  );
}
