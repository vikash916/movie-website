import { useNavigate, useRouteError } from "react-router-dom";
import './ErrorPage.css'; 

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  
  return (
    <div className="error-page animated">
      <img 
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" 
        alt="404 Not Found"
        className="error-image"
      />
      <h1>
        {error?.status === 404 ? "404 - Page Not Found" : "An unexpected error occurred"}
      </h1>
      <p>
        {error?.status === 404 
          ? "Oops! The page you're looking for doesn't exist." 
          : error?.message || "Please try again later."}
      </p>
      <button onClick={handleGoBack} className="go-back-button">Go Back</button>
    </div>
  );
};
