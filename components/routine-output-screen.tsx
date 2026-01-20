"use client";

import { useState } from "react";
import type { QuizAnswers } from "@/types/quiz";

interface RoutineOutputScreenProps {
  answers: QuizAnswers;
}

export function RoutineOutputScreen({ answers }: RoutineOutputScreenProps) {
  const [activeTab, setActiveTab] = useState<
    "routine" | "products" | "tips" | "progress"
  >("routine");

  const morningRoutine = [
    {
      step: 1,
      name: "Face Cleansing",
      duration: "2 minutes",
      description:
        "Gently cleanse your face with warm water and a mild cleanser.",
    },
    {
      step: 2,
      name: "Lymphatic Drainage",
      duration: "3 minutes",
      description:
        "Use upward strokes from jawline to temples to stimulate lymph flow.",
    },
    {
      step: 3,
      name: "Cheek Lifting",
      duration: "2 minutes",
      description:
        "Place fingers on cheekbones and lift upward with gentle pressure.",
    },
    {
      step: 4,
      name: "Forehead Smoothing",
      duration: "2 minutes",
      description: "Use your knuckles to smooth forehead lines outward.",
    },
    {
      step: 5,
      name: "Eye Area Massage",
      duration: "2 minutes",
      description: "Gently tap and massage around eyes to reduce puffiness.",
    },
  ];

  const eveningRoutine = [
    {
      step: 1,
      name: "Cleanse",
      duration: "2 minutes",
      description: "Double cleanse with oil then water-based cleanser.",
    },
    {
      step: 2,
      name: "Acupressure Points",
      duration: "3 minutes",
      description: "Apply gentle pressure to 5 facial acupressure points.",
    },
    {
      step: 3,
      name: "Neck & Jawline",
      duration: "3 minutes",
      description:
        "Sculpt jawline with upward strokes and neck lifting massage.",
    },
    {
      step: 4,
      name: "Deep Muscle Release",
      duration: "3 minutes",
      description: "Release tension in facial muscles using circular motions.",
    },
    {
      step: 5,
      name: "Recovery Routine",
      duration: "2 minutes",
      description: "Apply nourishing serum with upward tapping motions.",
    },
  ];

  const recommendedProducts = [
    {
      name: "Hydrating Face Cleanser",
      type: "Cleanser",
      benefit: "Gentle on skin, removes impurities",
      brand: "Premium Skincare Co.",
    },
    {
      name: "Facial Lifting Serum",
      type: "Serum",
      benefit: "Firms and lifts with peptides",
      brand: "Growevity Labs",
    },
    {
      name: "Moisturizing Day Cream",
      type: "Moisturizer",
      benefit: "Hydrates and protects",
      brand: "Premium Skincare Co.",
    },
    {
      name: "Night Repair Mask",
      type: "Mask",
      benefit: "Deep nourishment while sleeping",
      brand: "Growevity Labs",
    },
    {
      name: "Broad Spectrum SPF 50",
      type: "Sunscreen",
      benefit: "Essential daily protection",
      brand: "Premium Skincare Co.",
    },
    {
      name: "Eye Contour Cream",
      type: "Eye Care",
      benefit: "Targets fine lines and puffiness",
      brand: "Growevity Labs",
    },
  ];

  const lifestyleTips = [
    {
      icon: "💧",
      title: "Hydration",
      tips: [
        "Drink 8-10 glasses of water daily",
        "Use hydrating serums before moisturizer",
        "Hydrate skin from within and without",
      ],
    },
    {
      icon: "😴",
      title: "Sleep & Recovery",
      tips: [
        "Get 7-9 hours of quality sleep",
        "Sleep on your back to prevent wrinkles",
        "Use a silk pillowcase to reduce friction",
      ],
    },
    {
      icon: "☀️",
      title: "Sun Protection",
      tips: [
        "Apply SPF 30+ daily, even indoors",
        "Reapply every 2 hours when outdoors",
        "Wear wide-brimmed hats and sunglasses",
      ],
    },
    {
      icon: "🧘",
      title: "Stress Management",
      tips: [
        "Practice daily meditation or yoga",
        "Facial massage improves mood",
        "Reduce screen time before bed",
      ],
    },
    {
      icon: "🥗",
      title: "Nutrition",
      tips: [
        "Eat antioxidant-rich foods",
        "Include omega-3 fatty acids",
        "Limit sugar and processed foods",
      ],
    },
    {
      icon: "🏃",
      title: "Exercise",
      tips: [
        "30 minutes of cardio 5x weekly",
        "Improves circulation and glow",
        "Yoga enhances facial blood flow",
      ],
    },
  ];

  const milestones = [
    {
      week: "Week 1-2",
      goal: "Get into routine",
      description: "Establish daily face yoga habit",
    },
    {
      week: "Week 3-4",
      goal: "Skin appearance",
      description: "Notice improved skin texture and glow",
    },
    {
      week: "Week 5-8",
      goal: "Visible changes",
      description: "See lifting and tightening effects",
    },
    {
      week: "Week 9-12",
      goal: "Significant results",
      description: "Reduced wrinkles, improved contour",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Your{" "}
            <span className="text-primary">Personalized Looksmaxing Plan</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            From Growevity - Tailored to your goals and skin profile
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Goal</p>
              <p className="font-semibold text-foreground capitalize">
                {answers.goal?.replace("-", " ")}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Age Group</p>
              <p className="font-semibold text-foreground">
                {answers.ageGroup}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Skin Type</p>
              <p className="font-semibold text-foreground capitalize">
                {answers.skinType}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Duration</p>
              <p className="font-semibold text-foreground">2x Daily</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto border-b border-border">
          {[
            { id: "routine", label: "Daily Routine" },
            { id: "products", label: "Products" },
            { id: "tips", label: "Lifestyle" },
            { id: "progress", label: "Milestones" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "routine" && (
          <div className="space-y-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Morning Routine (11 minutes)
              </h2>
              <div className="space-y-4">
                {morningRoutine.map((item) => (
                  <div
                    key={item.step}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.duration}
                        </p>
                        <p className="text-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Evening Routine (13 minutes)
              </h2>
              <div className="space-y-4">
                {eveningRoutine.map((item) => (
                  <div
                    key={item.step}
                    className="bg-card border border-border rounded-xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.duration}
                        </p>
                        <p className="text-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "products" && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Recommended Skincare Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommendedProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-foreground">
                      {product.name}
                    </h3>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {product.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.benefit}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {product.brand}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tips" && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Lifestyle Tips for Best Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lifestyleTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{tip.icon}</span>
                    <h3 className="font-bold text-foreground text-lg">
                      {tip.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {tip.tips.map((t, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "progress" && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Your Progress Milestones
            </h2>
            <div className="relative space-y-6">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                      ✓
                    </div>
                    {idx < milestones.length - 1 && (
                      <div className="w-1 h-16 bg-primary/30 mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-bold text-foreground text-lg">
                      {milestone.week}
                    </h3>
                    <p className="font-semibold text-foreground mb-1">
                      {milestone.goal}
                    </p>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Ready to start?
          </h3>
          <p className="text-muted-foreground mb-6">
            Begin your face yoga journey today and see results in weeks
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Start Your Journey
          </button>
        </div>

        <div className="text-center text-sm text-muted-foreground mb-8">
          <p>
            This personalized plan was created by Growevity's Looksmaxing
            program
          </p>
          <p>Consistency is key - follow your routine daily for best results</p>
        </div>
      </div>
    </div>
  );
}
