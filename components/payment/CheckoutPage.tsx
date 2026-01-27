"use client"
import React, { useEffect, useState } from 'react'
import {
    useStripe,
    useElements,
    PaymentElement
} from "@stripe/react-stripe-js"
import convertToSubcurrency from '@/lib/convertToSubcurrency';
const CheckoutPage = ({amount}:{amount:number}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage,setErrorMessage] = useState<string>();
    const [clientSecret,setClientSecret] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(()=>{
        fetch("/api/create-payment-intent",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({amount:convertToSubcurrency(amount)})
        })
        .then(res=>res.json())
        .then(data=>{
            setClientSecret(data.clientSecret)
        })
    },[amount])
  const handleSubmit = async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(!stripe || !elements){
        return;
    }
    setLoading(true);
    const {error} = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams:{
            return_url:`${window.location.origin}/payment-success?amount=${amount}`
        }
    })
    if(error){
        setErrorMessage(error.message as string);
    }
    setLoading(false);
  }

  if(!clientSecret || !stripe || !elements){
    return <div>Loading</div>
  }
  return (
    <form className='' onSubmit={handleSubmit}>
        {clientSecret && <PaymentElement />}
        {errorMessage && <div className='text-red-500'>{errorMessage}</div>}
        <button
        disabled={!stripe || loading}
        className='bg-white text-green-500 px-12 py-2 rounded-2xl mt-4 cursor-pointer'>
            {!loading ? `Pay $${amount}` : "Processing..."}
        </button>
    </form>
  )
}

export default CheckoutPage