import { useNavigate, Link } from "react-router-dom";

import './Footer.css';
export const Footer = ()=>{
  const navigate = useNavigate();
    return(
        <>
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-text">© 2025 VikashMovieCollection. All rights reserved.</p>
        <button className="watch-ad-button">Watch Ad</button>
      </div>

      <div className="subscription-section">
        <h3>Choose a Subscription Plan</h3>
        <div className="subscription-cards">
          <div className="card">
            <h4>Basic</h4>
            <p>₹99 / month</p>
            <p>720p Quality</p>
            <button className="subscribe-button"onClick={() => navigate("/subscribe")}>Subscribe</button>
          </div>
          <div className="card">
            <h4>Standard</h4>
            <p>₹199 / month</p>
            <p>1080p Quality + No Ads</p>
            <button className="subscribe-button"onClick={() => navigate("/subscribe")}>Subscribe</button>
          </div>
          <div className="card">
            <h4>Premium</h4>
            <p>₹299 / month</p>
            <p>4K Quality + Multiple Devices</p>
            <button className="subscribe-button"onClick={() => navigate("/subscribe")}>Subscribe</button>
          </div>
        </div>

        <div className="upi-section">
          <p>Pay using UPI:</p>
          <div className="upi-icons">
            <img src="credit_card_PNG71 1.png" alt="PhonePe" />
            <img src="OIP 3.webp" alt="GPay" />
            <img src="credit_card_PNG71 1.png" alt="BHIM" />
            <img src="credit_card_PNG71 1.png" alt="Paytm" />
          </div>
        </div>

        <div className="email-subscribe">
          <p>Enter your email to get updates or free trials:</p>
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-button">Submit</button>
        </div>
      </div>
    </footer>
</> 
 );
};



    