"use client";

import { useState } from "react";
import { QuizAnswers } from "@/types/quiz";
import { AgeSelectionScreen } from "@/components/age-selection-screen";
import { MainGoalScreen } from "@/components/main-goal-screen";
import { FaceYogaKnowledgeScreen } from "@/components/face-yoga-knowledge-screen";
import { FaceYogaExplanationScreen } from "@/components/face-yoga-explanation-screen";
import { SkinSatisfactionScreen } from "@/components/skin-satisfaction-screen";
import { FocusAreasScreen } from "@/components/focus-areas-screen";
import { BenefitsExplanationScreen } from "@/components/benefits-explanation-screen";
import { SkincareRoutineScreen } from "@/components/skincare-routine-screen";
import { CareCosmeticsScreen } from "@/components/care-cosmetics-screen";
import { SunSafetyScreen } from "@/components/sun-safety-screen";
import { ProgramPersonalizationScreen } from "@/components/program-personalization-screen";
import { ExpertCollaborationScreen } from "@/components/expert-collaboration-screen";
import { TestimonialFemaleScreen } from "@/components/testimonial-female-screen";
import { TestimonialMaleScreen } from "@/components/testimonial-male-screen";
import { DietsScreen } from "@/components/diets-screen";
import { AestheticianVisitsScreen } from "@/components/aesthetician-visits-screen";
import { SugarConsumptionScreen } from "@/components/sugar-consumption-screen";
import { WaterIntakeScreen } from "@/components/water-intake-screen";
import { GenderSelectionScreen } from "@/components/gender-selection-screen";
import { SkinTypeDescriptionScreen } from "@/components/skin-type-description-screen";
import { SkinConcernsScreen } from "@/components/skin-concerns-screen";
import { ProgramAdjustmentScreen } from "@/components/program-adjustment-screen";
import { FaceShapeScreen } from "@/components/face-shape-screen";
import { MenstrualCycleScreen } from "@/components/menstrual-cycle-screen";
import { MentalHealthScreen } from "@/components/mental-health-screen";
import { TimeCommitmentScreen } from "@/components/time-commitment-screen";
import { ImprovementAreasScreen } from "@/components/improvement-areas-screen";
import { AdditionalFeaturesScreen } from "@/components/additional-features-screen";
import { SuccessStatsScreen } from "@/components/success-stats-screen";
import { ExpertTeamScreen } from "@/components/expert-team-screen";
import { ScienceStudiesScreen } from "@/components/science-studies-screen";
import { AnalyzingResponsesScreen } from "@/components/analyzing-responses-screen";
import { FinalEmailCollectionScreen } from "@/components/final-email-collection-screen";
import { EmailSubscriptionScreen } from "@/components/email-subscription-screen";
import { NewYearOfferScreen } from "@/components/new-year-offer-screen";
import { PlanReadyScreen } from "@/components/plan-ready-screen";
import { AnalyzingSkinScreen } from "@/components/analyzing-skin-screen";
import { InsightPopupScreen } from "@/components/insight-popup-screen";

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const handleNext = (newAnswers: Partial<QuizAnswers>) => {
    setAnswers((prev) => ({ ...prev, ...newAnswers }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleExplanationNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // Dynamic testimonial screen based on gender
  const getTestimonialScreen = () => {
    if (answers.gender === "male") {
      return (
        <TestimonialMaleScreen
          key="testimonial-male"
          onNext={handleExplanationNext}
        />
      );
    } else if (answers.gender === "female") {
      return (
        <TestimonialFemaleScreen
          key="testimonial-female"
          onNext={handleExplanationNext}
        />
      );
    }
    // Default to male if no gender selected yet
    return (
      <TestimonialMaleScreen
        key="testimonial-male"
        onNext={handleExplanationNext}
      />
    );
  };

  const steps = [
    <AgeSelectionScreen key="age" onNext={handleNext} />,
    <MainGoalScreen key="goal" onNext={handleNext} onBack={handleBack} />,
    <AnalyzingSkinScreen key="analyzing-skin" onNext={handleExplanationNext} />,
    <FaceYogaKnowledgeScreen
      key="knowledge"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <FaceYogaExplanationScreen
      key="explanation"
      onNext={handleExplanationNext}
      onBack={handleBack}
    />,
    <SkinSatisfactionScreen
      key="satisfaction"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <InsightPopupScreen
      key="insight-1"
      onNext={handleExplanationNext}
      insight="Based on your skin satisfaction level, we're customizing exercises to target your specific concerns."
      title="We noticed something about your skin"
    />,
    <FocusAreasScreen key="focus" onNext={handleNext} onBack={handleBack} />,
    <BenefitsExplanationScreen
      key="benefits"
      onNext={handleExplanationNext}
      onBack={handleBack}
    />,
    <ImprovementAreasScreen
      key="improvement-areas"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <SkincareRoutineScreen
      key="routine"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <CareCosmeticsScreen
      key="cosmetics"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <InsightPopupScreen
      key="insight-2"
      onNext={handleExplanationNext}
      insight="Your skincare routine shows you're dedicated to self-care. We're adding complementary face yoga techniques."
      title="Great skincare habits detected!"
    />,
    <SunSafetyScreen key="sun" onNext={handleNext} onBack={handleBack} />,
    <ProgramPersonalizationScreen
      key="program"
      onNext={handleExplanationNext}
    />,
    <AestheticianVisitsScreen
      key="aesthetician"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <ExpertCollaborationScreen key="expert" onNext={handleExplanationNext} />,
    <DietsScreen key="diets" onNext={handleNext} onBack={handleBack} />,
    <SugarConsumptionScreen
      key="sugar"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <WaterIntakeScreen key="water" onNext={handleNext} onBack={handleBack} />,
    <InsightPopupScreen
      key="insight-3"
      onNext={handleExplanationNext}
      insight="Your lifestyle choices directly impact your skin health. We're incorporating this into your personalized plan."
      title="Lifestyle analysis complete"
    />,
    <GenderSelectionScreen
      key="gender"
      onNext={handleNext}
      onBack={handleBack}
    />,
    // Dynamic testimonial based on gender
    getTestimonialScreen(),
    <SkinTypeDescriptionScreen
      key="skin-type"
      onNext={handleNext}
      onBack={handleBack}
    />,
    // SCREENS 21+ (from next batch of screenshots):
    <SkinConcernsScreen
      key="skin-concerns"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <ProgramAdjustmentScreen
      key="program-adjustment"
      onNext={handleExplanationNext}
      onBack={handleBack}
    />,
    <FaceShapeScreen
      key="face-shape"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <MenstrualCycleScreen
      key="menstrual-cycle"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <MentalHealthScreen
      key="mental-health"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <TimeCommitmentScreen
      key="time-commitment"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <AdditionalFeaturesScreen
      key="additional-features"
      onNext={handleNext}
      onBack={handleBack}
    />,
    <SuccessStatsScreen key="success-stats" onNext={handleExplanationNext} />,
    <ExpertTeamScreen key="expert-team" onNext={handleExplanationNext} />,
    <ScienceStudiesScreen
      key="science-studies"
      onNext={handleExplanationNext}
    />,
    <AnalyzingResponsesScreen key="analyzing-responses" onNext={handleNext} />,
    <FinalEmailCollectionScreen key="final-email" onNext={handleNext} />,
    <EmailSubscriptionScreen key="email-subscription" onNext={handleNext} />,
    <NewYearOfferScreen key="new-year-offer" onNext={handleExplanationNext} />,
    <PlanReadyScreen key="plan-ready" onNext={handleNext} />,
  ];

  return (
    <div className="">
      {steps[currentStep] || (
        <div className="h-full flex items-center justify-center">
          Quiz Complete! Collected answers: {JSON.stringify(answers, null, 2)}
        </div>
      )}
    </div>
  );
}
