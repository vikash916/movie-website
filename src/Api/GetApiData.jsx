export const getMoviesData = async () => {
try{
 const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}=avengers`
    );
    const data = await response.json();
    return data;
} catch(error){
    console.error("Error fetching API data:", error);
    
}
}