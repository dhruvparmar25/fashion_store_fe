import axios from "axios";

/**
 * Utility function to get the authorization header with a stored token from local storage.
 * This function is used to add the authorization header when sending requests that require authentication.
 * Headers object containing the authorization token.
 */
export const getHeader = () => {
  const token = localStorage.getItem("token") || "";
  return { authorization: `Bearer ${token}` };
};

export const completeOrderPayment = async (order) => {
  // const script = document.createElement('script');
  // script.src="https://checkout.razorpay.com/v1/checkout.js"
  // document.head.appendChild(script)
  console.log(import.meta.env.VITE_RAZORPAY_TEST_KEY_ID);
  const options = {
    key: import.meta.env.VITE_RAZORPAY_TEST_KEY_ID,
    amount: (order.order?.amount ?? 0) * 100,
    currency: "INR",
    order_id: order.razorpay_order_id,
    prefill: {
      name: order.address?.fullName,
      email: order.order?.email,
      contact: order.address?.phoneNumber,
    },
    theme: {
      color: "#F37254",
    },
    handler: (res) => {
      console.log("Orders:", order.order);
      console.log("Order ID:", order?.order?._id);
      saveTransation(res?.razorpay_payment_id, order?.order?._id);
    },
  };
  const razorpay = new Razorpay(options);
  razorpay.open();
  razorpay.on("payment.failed", (err) => {
    console.log("payment fail", err);
  });
};

export const saveTransation = async (paymentId, orderId) => {
  const res = await axios.post(
    `http://localhost:3000/api/transaction/${orderId}`,
    { paymentId }
  );

  console.log("saveTransation", res.data);

  // /transaction/orderId
  // {paymentId}
};
