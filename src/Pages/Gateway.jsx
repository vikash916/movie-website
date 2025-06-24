// pages/Gateway.jsx
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Gateway.css'; // We'll style it too

export const Gateway = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Optional: get form data from location.state
  const paymentType = location.state?.payment || "upi";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading like real payment page
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    alert("🎉 Payment Successful!");
    navigate("/confirmation");
  };

  return (
    <div className="gateway-container">
      <h2>Secure Payment Gateway</h2>

      {loading ? (
        <p className="loading">Processing your payment...</p>
      ) : (
        <div className="payment-ui">
          {paymentType === "upi" ? (
            <>
              <img src="/qr-fake.png" alt="Fake QR Code" className="qr" />
              <p>Scan the code or enter UPI ID: <b>vikash@upi</b></p>
            </>
          ) : (
            <>
              <div className="card-box">
                <div className="card-number">1234 5678 9101 1121</div>
                <div className="card-details">
                  <span>Vikash Pandey</span>
                  <span>12/28</span>
                </div>
              </div>
              <p>Fake Visa / MasterCard UI</p>
            </>
          )}

          <button onClick={handleComplete} className="pay-btn">Complete Payment</button>
        </div>
      )}
    </div>
  );
};

export default Gateway;
