// import { useLoaderData, useParams } from "react-router-dom"
// import "./MovieDetails.css";
// export const MovieDetails = ()=>{
// //const params = useParams();
// const movieData = useLoaderData();
// const {
//     Actor,
//     Title,
//     Year,
//     Genre,
//     Plot,
//     imdbRating,
//     Poster,
//     Director,
//     Runtime,
//   } = movieData;
//     return(
//         <>
//           <div className="movie-details">
//       <div className="movie-card">
//         <img
//           src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"}
//           alt={Title}
//           className="movie-poster"
//         />
//         <div className="movie-info">
//           <h2>{Title} ({Year})</h2>
//           <p><strong>Genre:</strong> {Genre}</p>
//           <p><strong>Director:</strong> {Director}</p>
//           <p><strong>Runtime:</strong> {Runtime}</p>
//           <p><strong>IMDB Rating:</strong> ⭐ {imdbRating}</p>
//           <p className="plot"><strong>Plot:</strong> {Plot}</p>

//           <button className="watch-btn">🎬 Watch Now</button>
//         </div>
//       </div>
//     </div>
//         </>
//     )}








//    import { useLoaderData, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./MovieDetails.css";

// export const MovieDetails = () => {
//   const { id } = useParams();
//   const movie = useLoaderData();

//   const {
//     Title,
//     Year,
//     Genre,
//     Plot,
//     imdbRating,
//     Poster,
//     Director,
//     Runtime,
//   } = movie;

//   const [trailerId, setTrailerId] = useState(null);

//   // 🔍 Fetch trailer from YouTube
//   const fetchTrailer = async () => {
//     try {
//       const apiKey = "AIzaSyBy162Bo5DwdkIpXjQcvbPVTFj3Tc6yq4U";
//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${Title} official trailer&type=video&key=${apiKey}`
//       );
//       const data = await response.json();
//       const videoId = data.items[0]?.id?.videoId;
//       setTrailerId(videoId);
//     } catch (error) {
//       console.error("Error fetching trailer:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTrailer();
//   }, [Title]);

//   return (
//     <div className="movie-details">
//       <div className="movie-card">
//         <img
//           src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"}
//           alt={Title}
//           className="movie-poster"
//         />
//         <div className="movie-info">
//           <h2>
//             {Title} ({Year})
//           </h2>
//           <p><strong>Genre:</strong> {Genre}</p>
//           <p><strong>Director:</strong> {Director}</p>
//           <p><strong>Runtime:</strong> {Runtime}</p>
//           <p><strong>IMDB Rating:</strong> ⭐ {imdbRating}</p>
//           <p className="plot"><strong>Plot:</strong> {Plot}</p>

//           {/* Optional Watch Now Button */}
//           <button className="watch-btn">🎬 Watch Now</button>

//           {/* 🎞️ Trailer Embed */}
//           {trailerId && (
//             <div className="trailer-section">
//               <h3>Official Trailer</h3>
//               <iframe
//                 width="100%"
//                 height="315"
//                 src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
//                 title="Movie Trailer"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };







import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./MovieDetails.css";

export const MovieDetails = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();

  const {
    Title,
    Year,
    Genre,
    Plot,
    imdbRating,
    Poster,
    Director,
    Runtime,
    imdbID,
  } = movie;

  return (
    <div className="movie-details">
      <div className="movie-card">
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"}
          alt={Title}
          className="movie-poster"
        />
        <div className="movie-info">
          <h2>{Title} ({Year})</h2>
          <p><strong>Genre:</strong> {Genre}</p>
          <p><strong>Director:</strong> {Director}</p>
          <p><strong>Runtime:</strong> {Runtime}</p>
          <p><strong>IMDB Rating:</strong> ⭐ {imdbRating}</p>
          <p className="plot"><strong>Plot:</strong> {Plot}</p>

          <button
            className="watch-btn"
            onClick={() => navigate(`/watch/${imdbID}`)}
          >
            🎬 Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};
