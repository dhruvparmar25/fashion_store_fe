import axios from "axios";
import router from "@/router/router";

export const getHeader = () => {
  const token = localStorage.getItem("token") || "";
  return { authorization: `Bearer ${token}` };
};

export const completeOrderPayment = async (order, onSuccessCallback) => {
  const options = {
    key: import.meta.env.VITE_RAZORPAY_TEST_KEY_ID,
    amount: ((order.order?.totalAmount || order?.amount) ?? 0) * 100,
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
    handler: async (res) => {
      try {
        await saveTransation(res?.razorpay_payment_id, order?.order?._id);
        if (typeof onSuccessCallback === "function") {
          await onSuccessCallback(); // ✅ refresh orders
        }
        router.push("/orders");
      } catch (err) {
        console.error("Error in payment handler:", err);
      }
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
