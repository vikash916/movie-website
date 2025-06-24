import { Link, NavLink } from 'react-router-dom';
import './Header.css'; 

export const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5977/5977588.png"
          alt="Logo"
          className="logo"
        />
        <span className="title">VikashMovieCollection</span>
      </NavLink>

      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/movie" className="nav-link">Movies</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      
      <div className="auth-section">
        <Link to="/signin" className="signin-button">Sign In</Link>
        <span className="subscription-text">
          Take the subscription for watching the movie without ad interruption
        </span>
      </div>
    </header>
  );
}
