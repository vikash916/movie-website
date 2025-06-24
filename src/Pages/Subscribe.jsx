

// import { useState } from "react";
// import "./Subscribe.css";

// export const Subscribe = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     payment: "",
//   });
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePaymentSelect = (method) => {
//     setFormData((prev) => ({ ...prev, payment: method }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, number, payment } = formData;

//     if (!name || !email || !number || !payment) {
//       alert("Please fill in all fields and select a payment option.");
//       return;
//     }

//     // Log user details
//     console.log("✅ New Subscription:", formData);
//     alert("🎉 Subscription Successful!");

//     // Reset form
//     setFormData({ name: "", email: "", number: "", payment: "" });
//   };

//   return (
//     <div className="subscribe-page">
//       <h2>Subscribe to Watch Full Movies 🎬</h2>
//       <form onSubmit={handleSubmit} className="subscribe-form">
//         <input
//           type="text"
//           placeholder="Full Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           placeholder="Email Address"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <input
//           type="tel"
//           placeholder="Phone Number"
//           name="number"
//           value={formData.number}
//           onChange={handleChange}
//         />

//         <div className="payment-options">
//           <h4>Select Payment Method:</h4>
//           <button
//             type="button"
//             className={formData.payment === "card" ? "selected" : ""}
//             onClick={() => handlePaymentSelect("card")}
//           >
//             💳 Credit / Debit Card
//           </button>
//           <button
//             type="button"
//             className={formData.payment === "upi" ? "selected" : ""}
//             onClick={() => handlePaymentSelect("upi")}
//           >
//             🏦 UPI / QR Code
//           </button>
//         </div>

//         <button type="submit" className="subscribe-submit">
//           Subscribe Now
//         </button>
//       </form>
//     </div>
//   );
// };



// src/Pages/Subscribe.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Subscribe.css";

export const Subscribe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    payment: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSelect = (method) => {
    setFormData((prev) => ({ ...prev, payment: method }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, number, payment } = formData;

    if (!name || !email || !number || !payment) {
      alert("Please fill in all fields and select a payment option.");
      return;
    }

    console.log("✅ New Subscription:", formData);

    // ✅ Navigate to the fake payment gateway
    navigate("/gateway", {
      state: { payment: payment }
    });
  };

  return (
    <div className="subscribe-page">
      <h2>Subscribe to Watch Full Movies 🎬</h2>
      <form onSubmit={handleSubmit} className="subscribe-form">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />

                <div className="payment-options">
                  <h4>Select Payment Method:</h4>
                  <button
                    type="button"
                    className={formData.payment === "card" ? "selected" : ""}
                    onClick={() => handlePaymentSelect("card")}
                  >
                    💳 Credit / Debit Card
                  </button>
                  <button
                    type="button"
                    className={formData.payment === "upi" ? "selected" : ""}
                    onClick={() => handlePaymentSelect("upi")}
                  >
                    🏦 UPI / QR Code
                  </button>
                </div>
                <button type="submit" className="subscribe-submit">
                  Subscribe Now
                </button>
              </form>
            </div>
          );
        };