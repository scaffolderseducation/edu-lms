import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { api } from "../services/api";
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
  const [name, setName] = useState("");
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
    const type = new URLSearchParams(location.search).get("type") || "entry";
    setPaymentType(type);

    // Initial fill from localStorage if present
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    if (storedUser.email) {
      setUser(storedUser);
      setEmail(storedUser.email);
      if (storedUser.country) setCountry(storedUser.country);
      if (storedUser.name) setName(storedUser.name);

      if (type === "entry" && storedUser.entryPaid) {
        alert("You are already enrolled! Redirecting to your Dashboard.");
        navigate("/dashboard", { replace: true });
        return;
      }
      if (type === "certificate" && storedUser.certificatePaid) {
        alert("You have already paid for the certificate!");
        navigate("/dashboard", { replace: true });
        return;
      }
    }

    // Subscribe to auth state and fetch fresh Firestore data
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      const currentStored = JSON.parse(localStorage.getItem("user")) || {};

      if (!currentUser && (!currentStored || !currentStored.email)) {
        alert("Please login first to access checkout.");
        navigate("/login", { replace: true });
        return;
      }

      if (currentUser) {
        let userData = {
          uid: currentUser.uid,
          email: currentUser.email,
          name: currentUser.displayName || "",
          ...currentStored,
        };

        try {
          let userSnap = await getDoc(doc(db, "users", currentUser.uid));
          if (!userSnap.exists() && currentUser.email) {
            userSnap = await getDoc(doc(db, "users", currentUser.email));
          }

          if (userSnap.exists()) {
            const data = userSnap.data();
            const resolvedName =
              data.name ||
              data.displayName ||
              data.fullName ||
              currentUser.displayName ||
              userData.name ||
              "";

            userData = {
              ...userData,
              ...data,
              name: resolvedName,
            };

            if (data.country) {
              setCountry(data.country);
            }
          }
        } catch (err) {
          console.error("Error fetching user from Firestore in PaymentPage:", err);
        }

        // Fallback for name if neither auth nor Firestore had it
        if (!userData.name && currentUser.email) {
          if (currentUser.email.toLowerCase().includes("sarika")) {
            userData.name = "Sarika Jain";
          } else {
            const local = currentUser.email.split("@")[0].replace(/[0-9]/g, "");
            const parts = local.split(/[._-]+/).filter(Boolean);
            userData.name = parts.length > 0
              ? parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ")
              : currentUser.email.split("@")[0];
          }
        }

        setUser(userData);
        setName(userData.name || "");
        if (userData.email) setEmail(userData.email);
        if (userData.country) setCountry(userData.country);

        localStorage.setItem("user", JSON.stringify(userData));

        if (type === "entry" && userData.entryPaid) {
          alert("You are already enrolled! Redirecting to your Dashboard.");
          navigate("/dashboard", { replace: true });
          return;
        }
        if (type === "certificate" && userData.certificatePaid) {
          alert("You have already paid for the certificate!");
          navigate("/dashboard", { replace: true });
          return;
        }
      }
    });

    return () => unsubscribe();
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
            uid: user.uid || user.email,
          });

          const verifyData = verifyRes;

          if (verifyData.success) {
            // Update Firestore directly from frontend
            try {
              const targetDocId = user.uid || user.email;
              const updatePayload = {
                country: country,
              };
              if (name) updatePayload.name = name;
              if (paymentType === "entry") {
                updatePayload.entryPaid = true;
              } else if (paymentType === "certificate") {
                updatePayload.certificatePaid = true;
              }
              await updateDoc(doc(db, "users", targetDocId), updatePayload);
            } catch (e) {
              console.error("Failed to update Firestore:", e);
            }

            const updatedUser = {
              ...user,
              name: name || user.name,
              country: country,
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
          name: name || user?.name || "",
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

        {/* Full Name: Read-only displayed for logged in user */}
        <input
          className="payment-input"
          placeholder="Full Name"
          value={name || user?.name || ""}
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
