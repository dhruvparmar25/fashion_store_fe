/**
 * Utility function to get the authorization header with a stored token from local storage.
 * This function is used to add the authorization header when sending requests that require authentication.
 * Headers object containing the authorization token.
 */
export const getHeader = () => {
  const token = localStorage.getItem("token") || "";
  return { authorization: `Bearer ${token}` };
};

export const completeOrderPayment=async(order)=>{
  // const script = document.createElement('script');
  // script.src="https://checkout.razorpay.com/v1/checkout.js"
  // document.head.appendChild(script)
const options= {
  key: order?.key_id,
  amount:(order.order?.amount??0)*100, 
  currency: order.rozarpayOrder?.currency,
  order_id:order.rozarpayOrder?.id,
  prefill: {
    name: order.address?.fullName,
    email: order.order?.email,
    contact: order.address?.phoneNumber
  },
  theme: {
    color: '#F37254'
  },
  handler:(res)=>{
    console.log('paymentSuceescs',res)
  }
};
const razorpay= new Razorpay(options);
razorpay.open()
razorpay.on('payment.failed',(err)=>{
console.log('payment fail',err)
})
}

export const saveTransation = async()=>{
  
}