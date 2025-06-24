// import { useParams } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import "./WatchMovie.css";

// export const WatchMovie = () => {
//   const { movieID } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [trailerId, setTrailerId] = useState(null);
//   const [showMessage, setShowMessage] = useState(false);
//   const playerRef = useRef(null);

//   // Fetch movie details (for getting title)
//   const fetchMovieDetails = async () => {
//     const res = await fetch(
//       `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${movieID}`
//     );
//     const data = await res.json();
//     setMovie(data);
//   };

//   // Fetch trailer from YouTube
//   const fetchTrailer = async (title) => {
//     try {
//       const res = await fetch(
//         `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title} official trailer&type=video&key=YOUR_YOUTUBE_API_KEY`
//       );
//       const data = await res.json();
//       setTrailerId(data.items[0]?.id?.videoId);
//     } catch (error) {
//       console.error("Trailer fetch failed:", error);
//     }
//   };

//   // Call OMDB API on mount
//   useEffect(() => {
//     fetchMovieDetails();
//   }, [movieID]);

//   // Call YouTube API after movie loads
//   useEffect(() => {
//     if (movie?.Title) {
//       fetchTrailer(movie.Title);
//     }
//   }, [movie]);

//   // Initialize YouTube Player & listen for video end
//   useEffect(() => {
//     const tag = document.createElement("script");
//     tag.src = "https://www.youtube.com/iframe_api";
//     document.body.appendChild(tag);

//     window.onYouTubeIframeAPIReady = () => {
//       if (trailerId && playerRef.current) {
//         new window.YT.Player("yt-player", {
//           events: {
//             onStateChange: (event) => {
//               if (event.data === window.YT.PlayerState.ENDED) {
//                 setShowMessage(true); // Show message when trailer ends
//               }
//             },
//           },
//         });
//       }
//     };
//   }, [trailerId]);

//   return (
//     <div className="watch-page">
//       {trailerId ? (
//         <>
//           <iframe
//             ref={playerRef}
//             id="yt-player"
//             width="100%"
//             height="100%"
//             src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&enablejsapi=1`}
//             frameBorder="0"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//             title="Movie Trailer"
//           ></iframe>

//           {showMessage && (
//             <div className="subscription-message">
//               🎬 Watch full movie after subscription 🍿
//               <br />
//               <button className="subscribe-btn">Subscribe Now</button>
//             </div>
//           )}
//         </>
//       ) : (
//         <p style={{ color: "white" }}>Loading trailer...</p>
//       )}
//     </div>
//   );
// };




import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./WatchMovie.css";

export const WatchMovie = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerId, setTrailerId] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const playerRef = useRef(null);
const navigate = useNavigate();
  // Fetch movie details from OMDB
  const fetchMovieDetails = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${movieID}`
    );
    const data = await res.json();
    setMovie(data);
  };

  // Fetch trailer from YouTube
  const fetchTrailer = async (title) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title} official trailer&type=video&key=key`
      );
      const data = await res.json();
      const videoId = data.items[0]?.id?.videoId;
      setTrailerId(videoId || "6ZfuNTqbHE8"); // fallback: Avengers trailer
    } catch (error) {
      console.error("Trailer fetch failed:", error);
      setTrailerId("6ZfuNTqbHE8"); // fallback
    }
  };

  // Step 1: Get movie info
  useEffect(() => {
    fetchMovieDetails();
  }, [movieID]);

  // Step 2: Get trailer after movie title
  useEffect(() => {
    if (movie?.Title?.trim()) {
      fetchTrailer(movie.Title);
    }
  }, [movie]);

  // Step 3: Load YouTube API once trailerId is ready
  useEffect(() => {
    if (!trailerId) return;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      if (playerRef.current) {
        new window.YT.Player("yt-player", {
          events: {
            onReady: () => setIsLoading(false),
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                setShowMessage(true);
              }
            },
          },
        });
      }
    };
  }, [trailerId]);

  return (
    <div className="watch-page">
      {isLoading && (
        <div className="loading-spinner">⏳ Loading trailer...</div>
      )}

      {trailerId && (
        <>
          <iframe
            ref={playerRef}
            id="yt-player"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&enablejsapi=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Movie Trailer"
          ></iframe>

          {showMessage && (
            <div className="subscription-message">
              🎬 Watch full movie after subscription 🍿
              <br />
              <button className="subscribe-btn"onClick={() => navigate("/subscribe")}>Subscribe Now</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
