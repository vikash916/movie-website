
// // import{ Link } from "react-router-dom";
// // import "./Home.css";

// // export const Home = () => {
// // return(
// //         <div className="home-container">
// //       <div className="home-text">
// //         <h1>🎬 Welcome to MovieVerse</h1>
// //         <p>
// //           Discover trending movies, explore film details, and dive into cinematic worlds —
// //           all in one place.
// //         </p>
// //         <Link to='/movie'>
// //           <button className="explore-btn">Explore Movies</button>
// //         </Link>
// //       </div>

// //       <div className="home-gif">
// //         <img
// //       src="https://media.giphy.com/media/fwbZnTftCXVocKzfxR/giphy.gif"
// //           alt="Cinema GIF"
// //         />
// //       </div>
// //     </div>
// // )
// // }




// import { useNavigate, Link } from "react-router-dom";
// import "./Home.css";

// export const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       <div className="home-left">
//         <div className="home-text">
//           <h1>🎬 Welcome to MovieVerse</h1>
//           <p>
//             Discover trending movies, explore film details, and dive into cinematic worlds — 
//             all in one place. Enjoy a seamless streaming experience.
//           </p>

//           <div className="home-buttons">
//             <Link to="/movie">
//               <button className="explore-btn">🎥 Explore Movies</button>
//             </Link>

//             {/* <button
//               className="subscribe-btn"
//               onClick={() => navigate("/subscribe")}
//             >
//               🔒 Subscribe Now
//             </button> */}
//           </div>
//         </div>

//         <div className="highlights">
//           <h4>Why MovieVerse?</h4>
//           <ul>
//             <li>🚀 No Ads During Streaming</li>
//             <li>🔍 Search & Watch Latest Trailers</li>
//             <li>💳 Multiple Subscription Options</li>
//             <li>🎁 New Movie Recommendations Daily</li>
//           </ul>
//         </div>
//       </div>

//       <div className="home-gif">
//         <img
//           src="https://media.giphy.com/media/fwbZnTftCXVocKzfxR/giphy.gif"
//           alt="Cinema GIF"
//         />
//       </div>
//     </div>
//   );
// };

import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();

  // Fake reviews array
  const reviews = [
    {
      name: "Ravi Kumar",
      rating: 5,
      text: "Best platform to watch movies without ads! Smooth and clean UI too."
    },
    {
      name: "Ayesha Singh",
      rating: 4,
      text: "Loved the trailer section. Felt like Netflix on a budget!"
    },
    {
      name: "Ankit Raj",
      rating: 5,
      text: "Subscription was easy and quick. Totally worth it!"
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="home-left">
          <div className="home-text">
            <h1>🎬 Welcome to <span className="gradient-text">MovieVerse</span></h1>
            <p>
              Discover trending movies, explore film details, and dive into cinematic worlds — 
              all in one place. Enjoy a seamless streaming experience.
            </p>

            <div className="home-buttons">
              <Link to="/movie">
                <button className="explore-btn">🎥 Explore Movies</button>
              </Link>

              <button
                className="subscribe-btn"
                onClick={() => navigate("/subscribe")}
              >
                🔒 Subscribe Now
              </button>
            </div>
          </div>

          <div className="highlights">
            <h4>Why MovieVerse?</h4>
            <ul>
              <li>🚀 No Ads During Streaming</li>
              <li>🔍 Search & Watch Latest Trailers</li>
              <li>💳 Multiple Subscription Options</li>
              <li>🎁 New Movie Recommendations Daily</li>
            </ul>
          </div>
        </div>

        <div className="home-gif">
          <img
            src="https://media.giphy.com/media/fwbZnTftCXVocKzfxR/giphy.gif"
            alt="Cinema GIF"
          />
        </div>
      </div>
      {/* Review Slider */}
      <div className="review-slider">
        <h2>💬 What Our Viewers Say</h2>
        <div className="review-card">
          <p className="review-text">"{reviews[currentReview].text}"</p>
          <p className="review-name">– {reviews[currentReview].name}</p>
          <p className="review-stars">{"⭐".repeat(reviews[currentReview].rating)}</p>
        </div>
      </div>
    </div>
  );
};



      