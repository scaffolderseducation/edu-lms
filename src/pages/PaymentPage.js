import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { api } from "../services/api";
// src/PaymentPage.js

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/scaffolders-logo.png";
import "../PaymentPage.css";

const prices = {
  entry: {
    INR: 99,
    USD: 10,
  },
  certificate: {
    INR: 599,
    USD: 100,
  },
};

function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({});
  const [paymentType, setPaymentType] = useState("entry");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [promoVisible, setPromoVisible] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [currency, setCurrency] = useState("INR");
  const [finalAmount, setFinalAmount] = useState(0);
  const [shareCount, setShareCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || !storedUser.email) {
      alert("Please login first to access checkout.");
      navigate("/login", { replace: true });
      return;
    }
    setUser(storedUser);
    setEmail(storedUser.email || "");
    const type = new URLSearchParams(location.search).get("type") || "entry";
    setPaymentType(type);
  }, [location, navigate]);

  useEffect(() => {

    if (country === "India") {
      setCurrency("INR");
    } else if (country) {
      setCurrency("USD");
    }

  }, [country]);

  useEffect(() => {

const base = prices[paymentType]?.[currency] || 0;

    let totalDiscount = 0;

    if (promoCode === "EDUCATE21") {
      totalDiscount += 10;
    }

    if (
      paymentType === "certificate" &&
      shareCount >= 5
    ) {
      totalDiscount += 10;
    }

    if (totalDiscount > 25) {
      totalDiscount = 25;
    }

    const discounted =
      base - (base * totalDiscount) / 100;

    setDiscount(totalDiscount);
    setFinalAmount(Math.round(discounted));

  }, [
    promoCode,
    paymentType,
    currency,
    shareCount
  ]);

  const handlePayNow = async () => {

    if (!user || (!user.uid && !user.email)) {
      alert("Please login first.");
      navigate("/login");
      return;
    }

    if (!email || !country) {
      alert("Please fill all details.");
      return;
    }

    if (currency === "USD") {
      alert("International payments coming soon.");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded.");
      return;
    }

    try {

      setLoading(true);

      const response = await api.post("/api/payment/create-order", {
            amount: finalAmount,
            paymentType,
            email,
          });

      const order = response;

      if (!order.id) {

        alert("Unable to create payment order.");

        setLoading(false);

        return;
      }

        const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,

        amount: order.amount,

        currency: "INR",

        name: "Scaffolders Education",

        description:
          paymentType === "entry"
            ? "Entry Fee Payment"
            : "Certificate Fee Payment",

        order_id: order.id,

        handler: async function (response) {

          const verifyRes = await api.post("/api/payment/verify", {
                ...response,
                email,
                paymentType,
                amount: finalAmount,
                uid: user.uid|| user.email,
              });

          const verifyData = verifyRes;

          if (verifyData.success) {
              // FIX: Update Firestore directly from frontend!
              try {
                if (paymentType === "entry") {
                  await updateDoc(doc(db, "users", user.uid || user.email), { entryPaid: true });
                } else if (paymentType === "certificate") {
                  await updateDoc(doc(db, "users", user.uid || user.email), { certificatePaid: true });
                }
              } catch (e) {
                console.error("Failed to update Firestore:", e);
              }


            const updatedUser = {

              ...user,

              entryPaid:
                paymentType === "entry"
                  ? true
                  : user.entryPaid,

              certificatePaid:
                paymentType === "certificate"
                  ? true
                  : user.certificatePaid,
            };

            localStorage.setItem(
              "user",
              JSON.stringify(updatedUser)
            );

            navigate("/payment-success");

          } else {

            alert("Payment verification failed");

          }

        },

        prefill: {

          name: user?.name || "",

          email,

        },

        theme: {

          color: "#4caf50",

        },

      };

      const rzp = new window.Razorpay(options);

      rzp.open();

      setLoading(false);

    } catch (error) {

      console.error(error);

      alert("Payment Error : " + error.message);

      setLoading(false);

    }

  };

  const handleShare = (platform) => {

    setShareCount((prev) => Math.min(prev + 1, 5));

    alert(`Shared on ${platform}!`);

  };

  return (

    <div className="payment-page">

      <div className="payment-card">

        <img
          src={logo}
          alt="Scaffolders"
          className="payment-logo"
        />

        <h2>

          {paymentType === "entry"

            ? "Entry Fee Payment"

            : "Certificate Fee Payment"}

        </h2>

        <input
          className="payment-input"
          placeholder="Full Name"
            value={user?.name || ""}
          readOnly
        />

        <input
          className="payment-input"
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          className="payment-input"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >

          <option value="">Select Country</option>

          <option value="India">India</option>

          <option value="Other">International</option>

        </select>

        {country && (

          <>

            <p className="payment-amount">

              Base: {currency} {prices[paymentType][currency]}

            </p>

            {paymentType === "certificate" && (

              <>

                <p>Share with 5 teachers for discount</p>

                <div className="share-row">

                  <button
                    className="share-btn"
                    onClick={() => handleShare("WhatsApp")}
                  >

                    WhatsApp

                  </button>

                  <button
                    className="share-btn"
                    onClick={() => handleShare("LinkedIn")}
                  >

                    LinkedIn

                  </button>

                  <button
                    className="share-btn"
                    onClick={() => handleShare("Facebook")}
                  >

                    Facebook

                  </button>

                </div>

              </>

            )}

            {!promoVisible && (

              <button
                className="link-btn"
                onClick={() => setPromoVisible(true)}
              >

                Have a Promo Code?

              </button>

            )}

            {promoVisible && (

              <input
                className="payment-input"
                placeholder="Promo Code"
                value={promoCode}
                onChange={(e) =>
                  setPromoCode(e.target.value.toUpperCase())
                }
              />

            )}

            {discount > 0 && (

              <p className="payment-discount">

                Discount: {discount}%

              </p>

            )}

            <h3 className="payment-final">

              Payable: {currency} {finalAmount}

            </h3>

            <button
              className="pay-btn"
              onClick={handlePayNow}
              disabled={loading}
            >

              {loading ? "Processing..." : "Pay Now"}

            </button>

          </>

        )}

        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
        >

          ← Back to Dashboard

        </button>

      </div>

    </div>

  );

}

export default PaymentPage;
