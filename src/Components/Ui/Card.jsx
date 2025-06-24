// // import "./Card.css";

// // export const Card = ({ curMovie }) => {
// //   const { Title, Year, Poster, imdbID } = curMovie;

// //   return (
// //     <div className="flip-card">
// //       <div className="flip-card-inner">
// //         <div className="flip-card-front">
// //           <img
// //             src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"}
// //             alt={Title}
// //           />
// //         </div>
// //         <div className="flip-card-back">
// //           <h3>{Title}</h3>
// //           <p>Year: {Year}</p>
// //           <p>IMDB ID: {imdbID}</p>
// //            <button className="watch-btn">🎬 Watch Now</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// import "./Card.css";

// export const Card = ({ curMovie }) => {
//   const { Title, Year, Poster, imdbID } = curMovie;

//   return (
//     <div className="flip-card">
//       <div className="flip-card-inner">
//         <div className="flip-card-front">
//           <img
//             src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"}
//             alt={Title}
//           />
//           <div className="watch-btn-container">
//             <button className="watch-btn">🎬 Watch Now</button>
//           </div>
//         </div>
//         <div className="flip-card-back">
//           <h3>{Title}</h3>
//           <p>Year: {Year}</p>
//           <p>IMDB ID: {imdbID}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
  
import { NavLink } from "react-router-dom";
import "./Card.css";

export const Card = ({ curMovie }) => {
  const { Title, Year, Poster, imdbID } = curMovie;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"}
            alt={Title}
          />
        </div>
        <div className="flip-card-back">
          <h3>{Title}</h3>
          <p className="desc">
            A gripping tale of action and drama. One of the top-rated thrillers of {Year}.
          </p>
          <p>Year: {Year}</p>
          <p>IMDB ID: {imdbID}</p>
          <NavLink to={`/movie/${imdbID}`} className="watch-btn-container">
            <button className="watch-btn">🎬 Watch Now</button>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};
