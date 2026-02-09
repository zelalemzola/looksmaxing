"use client";

import Image from "next/image";

export interface ExpertTeamScreenProps {
  onNext: () => void;
}

const experts = [
  {
    name: "Jillian Osborne",
    description:
      "Certified Face Yoga teacher with 10+ years of experience in facial fitness, pilates, and pole fitness. The principal of a face pilates club.",
    image: "/jillian.webp",
  },
  {
    name: "Irina Makarevich",
    description:
      "Certified anti-aging face massage trainer. 10+ years of experience as an expert in myofascial release. Co-owner of a neuro-fitness club.",
    image: "/irina.webp",
  },
  {
    name: "Marina Vasilevskaya",
    description:
      "Certified face-building trainer with 12+ years of experience. Functional neurology expert. Co-owner of a neuro-fitness club.",
    image: "/marina.webp",
  },
];

export function ExpertTeamScreen({ onNext }: ExpertTeamScreenProps) {
  return (
    <div className=" bg-gray-50 flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-lg space-y-4">
        <div className="text-center">
          
          <h1 className="text-xl font-bold text-gray-900 leading-tight">
            Luvly programs are developed by
            <br />
            professional cosmetologists and
            <br />
            face yoga experts
          </h1>
        </div>

        <div className="space-y-6">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-4 rounded-2xl"
            >
              <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">
                  {expert.name}
                </h3>
                <p className="text-md text-gray-600 leading-relaxed">
                  {expert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
        <div className="pb-1 px-12 fixed bottom-2 mx-auto">
        <button
          onClick={onNext}
          className=" max-w-lg mx-auto block py-4 px-12 rounded-full font-semibold bg-gradient-to-r from-orange-400 to-red-400 text-white hover:opacity-90 transition-opacity"
          >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
