// import "./about.css"
// export const About = () => {
// return(
//      <div className="about-container">
//       <div className="about-content">
//         <h1>🎞️ About MovieVerse</h1>
//         <p>
//           Welcome to <strong>MovieVerse</strong> — your ultimate destination to explore the universe of cinema.
//           Whether you're into blockbusters, anime, thrillers, or classics, we've got you covered.
//         </p>
//         <p>
//           Dive into detailed movie info, discover hidden gems, and get lost in the world of storytelling.
//           We bring movies to your fingertips — fast, beautiful, and ad-free.
//         </p>
//         <p>
//           This platform is crafted with ❤️ using <strong>React</strong>, <strong>JSX</strong>, and the power of APIs.
//         </p>
//         <div className="about-vikash">
//         <h2>👨‍💻 About Vikash</h2>
//         <p>
//           Hey, I’m <strong>Vikash Pandey</strong> — the brain and heart behind this project.
//         </p>
//         <p>
//           A curious learner, self-taught frontend developer, and someone who believes in building one line of code at a time —
//           even on days filled with doubt, tuitions, and tired nights.
//         </p>
//       </div>
//          {/* <div className="about-vikash">
//         <h2>👨‍💻 About Vikash</h2>
//         <p>
//           Hey, I’m <strong>Vikash Pandey</strong> — the brain and heart behind this project.
//         </p>
//         <p>
//           A curious learner, self-taught frontend developer, and someone who believes in building one line of code at a time —
//           even on days filled with doubt, tuitions, and tired nights.
//         </p> */}
//       <div className="about-gif">
//         <img
//           src="https://media.giphy.com/media/3o7TKzFzwD0fGoy4W4/giphy.gif"
//           alt="About MovieVerse"
//         />
//       </div>
//     </div>
// )
// }
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      {/* Project Info */}
      <div className="about-content">
        <h1>🎞️ About MovieVerse</h1>
        <p>
          Welcome to <strong>MovieVerse</strong> — your ultimate destination to explore the universe of cinema.
          Whether you're into blockbusters, anime, thrillers, or classics, we've got you covered.
        </p>
        <p>
          Dive into detailed movie info, discover hidden gems, and get lost in the world of storytelling.
          This platform is built using <strong>React</strong>, <strong>JSX</strong>, and public APIs — fast, beautiful, ad-free.
        </p>
      </div>

      {/* Creator Info */}
      <div className="about-vikash">
        <h2>👨‍💻 About Vikash</h2>
        <p>
          Hey, I’m <strong>Vikash Pandey</strong> — the brain and heart behind this project.
        </p>
        <p>
          A curious learner, self-taught frontend developer, and someone who believes in building one line of code at a time —
          even on days filled with doubt, tuitions, and tired nights.
        </p>
        <p>
          This project is a testament to my passion for coding and my love for movies. I hope you enjoy using MovieVerse as much as I enjoyed building it!
        </p>
        <p className="signed">— Vikash 🖤</p>
      </div>

      {/* Optional GIF or image */}
      <div className="about-gif">
        <img
          src="https://media.giphy.com/media/3o7TKzFzwD0fGoy4W4/giphy.gif"
          alt="About MovieVerse"
        />
      </div>
    </div>
  );
};
