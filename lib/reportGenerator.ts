import type { QuizAnswers } from "@/types/quiz";

function formatList(arr: string[] | undefined): string {
  if (!arr || arr.length === 0) return "—";
  return arr.join(", ");
}

function formatValue(value: string | number | undefined): string {
  if (value === undefined || value === null) return "—";
  return String(value);
}

/**
 * Generate a personalized report HTML string from quiz answers.
 */
export function generateReportHtml(answers: QuizAnswers, planName: string): string {
  const sections = [
    {
      title: "Your profile",
      items: [
        { label: "Age group", value: formatValue(answers.ageGroup) },
        { label: "Gender", value: formatValue(answers.gender) },
        { label: "Skin type", value: formatValue(answers.skinType) },
        { label: "Face shape", value: formatValue(answers.faceShape) },
        { label: "Main goal", value: formatValue(answers.goal) },
        { label: "Goals", value: formatList(answers.goals) },
      ],
    },
    {
      title: "Skin & routine",
      items: [
        { label: "Skin satisfaction", value: formatValue(answers.skinSatisfaction) },
        { label: "Skin concerns", value: formatList(answers.skinConcerns ?? answers.concerns) },
        { label: "Focus areas", value: formatList(answers.focusAreas) },
        { label: "Skincare routine", value: formatValue(answers.skincareRoutine) },
        { label: "Care & cosmetics", value: formatList(answers.careCosmetics) },
        { label: "Sun safety", value: formatValue(answers.sunSafety ?? answers.sunProtection) },
      ],
    },
    {
      title: "Lifestyle",
      items: [
        { label: "Diet", value: formatValue(answers.diet) },
        { label: "Water intake (glasses/day)", value: formatValue(answers.waterIntake) },
        { label: "Sugar consumption", value: formatValue(answers.sugarConsumption) },
        { label: "Aesthetician visits", value: formatValue(answers.aestheticianVisits) },
        { label: "Time commitment", value: formatValue(answers.timeCommitment) },
        { label: "Face yoga knowledge", value: formatValue(answers.faceYogaKnowledge) },
      ],
    },
    {
      title: "Wellness",
      items: [
        { label: "Improvement areas", value: formatList(answers.improvementAreas) },
        { label: "Mental health", value: formatList(answers.mentalHealth) },
        { label: "Additional features", value: formatList(answers.additionalFeatures) },
        { label: "Menstrual cycle", value: formatValue(answers.menstrualCycle) },
      ],
    },
  ];

  const sectionHtml = sections
    .map(
      (sec) => `
    <h2 style="font-size:1.25rem;font-weight:700;margin:1.5rem 0 0.75rem;color:#1a1a1a;">${sec.title}</h2>
    <table style="width:100%;border-collapse:collapse;">
      ${sec.items
        .map(
          (item) => `
        <tr>
          <td style="padding:0.5rem 0.75rem 0.5rem 0;font-weight:500;color:#444;vertical-align:top;">${item.label}</td>
          <td style="padding:0.5rem 0;color:#1a1a1a;">${item.value}</td>
        </tr>
      `
        )
        .join("")}
    </table>
  `
    )
    .join("");

  const bodyContent = `
  <h1 style="font-size:1.75rem;margin-bottom:0.5rem;color:#1a1a1a;">Your Personalized Face Yoga & Skincare Report</h1>
  <p class="subtitle" style="color:#666;margin-bottom:1.5rem;">Generated from your quiz answers — Luvly</p>
  <span class="plan" style="display:inline-block;background:#f0f0f0;padding:0.25rem 0.75rem;border-radius:9999px;font-size:0.875rem;margin-bottom:1.5rem;">Plan: ${planName}</span>
  ${sectionHtml}
  <hr style="margin:2rem 0;border:0;border-top:1px solid #eee;" />
  <p style="font-size:0.875rem;color:#666;">Thank you for choosing Luvly. Use this report alongside your personalized program for best results.</p>
  `.trim();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Your Personalized Report — Luvly</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 720px; margin: 0 auto; padding: 2rem; color: #1a1a1a; line-height: 1.5; }
    h1 { font-size: 1.75rem; margin-bottom: 0.5rem; }
    .subtitle { color: #666; margin-bottom: 2rem; }
    .plan { display: inline-block; background: #f0f0f0; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; margin-top: 0.5rem; }
  </style>
</head>
<body>
  ${bodyContent}
</body>
</html>
  `.trim();
}

/**
 * Get quiz answers from sessionStorage (set by quiz page).
 */
export function getStoredQuizAnswers(): QuizAnswers | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem("luvly_quiz_answers");
    if (!raw) return null;
    return JSON.parse(raw) as QuizAnswers;
  } catch {
    return null;
  }
}
