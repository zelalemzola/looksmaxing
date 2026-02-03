"use client";

import React, { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Download, AlertTriangle } from "lucide-react";
import {
  generateReportHtml,
  getStoredQuizAnswers,
} from "@/lib/reportGenerator";
import type { QuizAnswers } from "@/types/quiz";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const planName = searchParams.get("planName") ?? "Pro";
  const redirectStatus = searchParams.get("redirect_status");

  const [showPopup, setShowPopup] = useState(true);
  const [reportHtml, setReportHtml] = useState<string>("");
  const [answers, setAnswers] = useState<QuizAnswers | null>(null);

  const isSuccess = redirectStatus === "succeeded";

  const buildReport = useCallback(() => {
    const stored = getStoredQuizAnswers();
    setAnswers(stored);
    const plan = planName ? decodeURIComponent(planName) : "Pro";
    const html = generateReportHtml(stored ?? {}, plan);
    setReportHtml(html);
  }, [planName]);

  useEffect(() => {
    buildReport();
  }, [buildReport]);

  // Warn user before leaving/reloading so they don't lose the report
  useEffect(() => {
    if (!isSuccess) return;
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isSuccess]);

  const handleDownload = () => {
    const blob = new Blob([reportHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `luvly-personalized-report-${new Date().toISOString().slice(0, 10)}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isSuccess) {
    return (
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-destructive mb-4 flex justify-center">
            <AlertTriangle className="w-12 h-12" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Payment could not be confirmed
          </h1>
          <p className="text-foreground/70 mb-6">
            If you completed payment, check your email or try again. Otherwise,
            return to pricing to choose a plan.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-primary-foreground font-semibold hover:opacity-90"
          >
            Back to pricing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Popup: don't reload before reading/downloading report */}
        {showPopup && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            aria-modal="true"
            role="dialog"
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl max-w-md w-full">
              <div className="flex justify-center text-primary mb-4">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-xl font-bold text-foreground text-center mb-2">
                Payment successful
              </h2>
              <p className="text-foreground/80 text-center text-sm mb-6">
                Please do not reload this page before finishing reading your
                report or before you download your report, or you may lose access
                to it and be sent back to the pricing page.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="w-full py-3 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90"
              >
                I understand, show my report
              </button>
            </div>
          </div>
        )}

        {/* Success header */}
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle2 className="w-10 h-10 text-primary flex-shrink-0" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Payment successful
            </h1>
            <p className="text-foreground/70">
              You’ve been charged ${amount ?? "—"} for your {planName} plan.
            </p>
          </div>
        </div>

        {/* Report card */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
          <div className="p-4 border-b border-border flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-foreground">
              Your personalized report
            </h2>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Download className="w-4 h-4" /> Download report
            </button>
          </div>
          <div className="p-4 sm:p-6">
            {reportHtml ? (
              <iframe
                title="Your personalized report"
                srcDoc={reportHtml}
                className="w-full min-h-[480px] rounded-lg border border-border bg-card"
                sandbox="allow-same-origin"
              />
            ) : (
              <p className="text-muted-foreground">
                Loading your report…
              </p>
            )}
          </div>
        </div>

        {!answers || Object.keys(answers).length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground text-center">
            This is a general report. Complete the quiz for a personalized
            report next time.
          </p>
        ) : null}

        <div className="mt-8 text-center">
          <Link
            href="/home"
            className="text-primary font-semibold hover:underline"
          >
            Return to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <p className="text-muted-foreground">Loading…</p>
        </div>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}
