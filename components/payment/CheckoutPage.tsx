"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

interface CheckoutPageProps {
  amount: number;
  planId?: string;
  planName?: string;
}

const CheckoutPage = ({ amount, planId = "pro", planName = "Pro" }: CheckoutPageProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) setClientSecret(data.clientSecret);
        if (data.error) setErrorMessage(data.error);
      })
      .catch(() => setErrorMessage("Failed to start checkout."));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    const returnUrl = `${window.location.origin}/payment-success?amount=${amount}&plan=${encodeURIComponent(planId)}&planName=${encodeURIComponent(planName)}`;
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: { return_url: returnUrl },
    });
    if (error) setErrorMessage(error.message ?? "Payment failed.");
    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="text-muted-foreground text-sm py-4">Loading checkout…</div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      {errorMessage && (
        <div className="text-destructive text-sm" role="alert">
          {errorMessage}
        </div>
      )}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full py-3 px-4 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {loading ? "Processing…" : `Pay $${amount.toFixed(2)}`}
      </button>
    </form>
  );
};

export default CheckoutPage;