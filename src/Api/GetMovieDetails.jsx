// //import { useParams } from "react-router-dom";
// export const getMoviesDetails = async ({params}) => {
//    // const params = useParams();
//    console.log(params);
//    const id = params.movieID;
// try{
//  const response = await fetch(
//        // `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}=avengers`
//          `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${id}` 

//     );
//     const data = await response.json();
//     return data;
// } catch(error){
//     console.error("Error fetching API data:", error);
    
// }
// }

// src/Loaders/getMoviesDetails.js
export const getMoviesDetails = async ({ params }) => {
  const id = params.movieID; // this should match the param in your route

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching API data:", error);
    return null;
  }
};

