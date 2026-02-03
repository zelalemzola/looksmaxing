"use client";

import React, { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import CheckoutPage from "@/components/payment/CheckoutPage";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

const PAYMENT_PLANS: Record<string, { name: string; amount: number }> = {
  pro: { name: "Pro", amount: 9.99 },
  premium: { name: "Premium", amount: 19.99 },
  "7-day": { name: "7-Day Plan", amount: 5.99 },
  "1-month": { name: "1-Month Plan", amount: 18.99 },
  "3-month": { name: "3-Month Plan", amount: 28.99 },
};

function PaymentContent() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan") ?? "pro";
  const amountParam = searchParams.get("amount");
  const plan = PAYMENT_PLANS[planId] ?? PAYMENT_PLANS.pro;
  const amount = amountParam != null && amountParam !== "" ? parseFloat(amountParam) : plan.amount;

  const options = useMemo(
    () => ({
      mode: "payment" as const,
      amount: convertToSubcurrency(amount),
      currency: "usd",
    }),
    [amount]
  );

  if (amount <= 0 || isNaN(amount)) {
    return (
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Invalid plan
          </h1>
          <p className="text-foreground/70 mb-6">
            Please choose a plan from the pricing page.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to pricing
          </Link>
        </div>
      </div>
    );
  }

  if (!stripePromise) {
    return (
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Payment not configured
          </h1>
          <p className="text-foreground/70 mb-6">
            Stripe publishable key is missing. Add{" "}
            <code className="text-sm bg-muted px-1 rounded">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> to your{" "}
            <code className="text-sm bg-muted px-1 rounded">.env.local</code> and restart the dev server.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to pricing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to pricing
        </Link>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">
              Complete your purchase
            </h1>
            <p className="text-foreground/70 mt-1">
              {plan.name} —{" "}
              <span className="font-semibold text-foreground">
                ${amount.toFixed(2)}
              </span>
            </p>
          </div>

          <Elements stripe={stripePromise} options={options}>
            <CheckoutPage amount={amount} planId={planId} planName={plan.name} />
          </Elements>
        </div>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      }
    >
      <PaymentContent />
    </Suspense>
  );
}
