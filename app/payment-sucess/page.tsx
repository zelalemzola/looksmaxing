import React from 'react'

const PaymentSuccessful = ({searchParams:{amount}}:{searchParams:{amount:string}}) => {
  return (
    <div className='max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-green-500 to-purple-500'>
        <div className="mb-10">
            <h1 className="text-4xl font-extrabold mb-2">Payment Successful</h1>
            <h2 className="text-2xl">
                You have successfully paid
                <span className="font-bold"> ${amount}</span>
            </h2>
        </div>
    </div>
  )
}

export default PaymentSuccessful