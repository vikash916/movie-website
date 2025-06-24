// src/Pages/Confirmation.jsx


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Confirmation.css";

export const Confirmation = () => {
  const navigate = useNavigate();

  // Optional: Auto redirect after few seconds (remove if not needed)
  // useEffect(() => {
  //   const timer = setTimeout(() => navigate("/movies"), 8000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="confirmation-container">
      <img
        src="https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif"
        alt="Celebration"
        className="confirmation-gif"
      />

      <h2>🎉 Payment Successful!</h2>
      <h3>💖 Thank you for your support!</h3>

      <p className="message">
        You've just unlocked unlimited access to the world of entertainment. <br />
        Your contribution means a lot to us and helps us bring you the best movies! 🎬
      </p>

      <div className="checkmark">✅</div>

      <button onClick={() => navigate("/movie")} className="go-to-movies-btn">
        Go to Movie Page 🍿
      </button>
    </div>
  );
};

export default Confirmation;
