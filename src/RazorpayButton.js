import React, { useEffect, useState } from "react";

const RazorpayButton = ({ type }) => {
  const [currency, setCurrency] = useState("INR");
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [finalAmount, setFinalAmount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) setUser(userData);

    // Detect user location
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => {
        if (data.country_name !== "India") setCurrency("USD");
      });

    // Base price setup
    if (type === "entry") setAmount(currency === "INR" ? 99 : 10);
    else setAmount(currency === "INR" ? 599 : 100);
  }, [currency, type]);

  const calculateDiscount = () => {
    let totalDiscount = 0;

    // 10% if quiz score is 100
    if (user?.quizScore === 100) totalDiscount += 10;

    // 5% if shared to 5+ people
    if (localStorage.getItem("sharedBonus") === "true") totalDiscount += 5;

    // Promo code
    if (promoCode === "EDUCATE21") totalDiscount += 10;

    if (totalDiscount > 25) totalDiscount = 25; // cap
    setDiscount(totalDiscount);
    alert(`🎉 Total discount applied: ${totalDiscount}%`);
  };

  useEffect(() => {
    setFinalAmount(amount - (amount * discount) / 100);
  }, [amount, discount]);

  const handlePayment = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: "rzp_test_RpSYTyMgCLgDcR", // Replace with your Razorpay key
        amount:
          currency === "INR"
            ? finalAmount * 100
            : Math.round(finalAmount * 83 * 100),
        currency: "INR",
        name: "Scaffolders Education",
        description:
          type === "entry" ? "Enrollment Fee Payment" : "Certificate Fee Payment",
        handler: function (response) {
          alert("✅ Payment successful!");
          if (type === "entry") {
            localStorage.setItem("entryPaid", "true");
            window.location.href = "/dashboard";
          } else {
            localStorage.setItem("certificatePaid", "true");
            window.location.href = "/certificate";
          }
        },
        theme: { color: "#00bfa6" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>
        Pay {currency} {finalAmount.toFixed(2)}
      </h3>

      <input
        type="text"
        placeholder="Enter Promo Code"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
        style={{ padding: "8px", borderRadius: "5px", border: "1px solid gray" }}
      />
      <button onClick={calculateDiscount} style={{ marginLeft: "10px" }}>
        Apply Discount
      </button>

      <br />
      <br />
      <button onClick={handlePayment}>Proceed to Pay</button>
    </div>
  );
};

export default RazorpayButton;
