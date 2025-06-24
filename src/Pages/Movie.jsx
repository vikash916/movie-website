 import{ useLoaderData } from "react-router-dom";
 import {Card} from "../Components/Ui/Card";
export const Movie = () => {
    const moviesData = useLoaderData();
    console.log(moviesData);


return(
    <>
    <div className="card-container">
   
    {moviesData &&
     moviesData.Search.map((curMovie) => {
        return <Card key={curMovie.imdbID} curMovie={curMovie} />;
    })}
    
    </div>
    </>
)
}

