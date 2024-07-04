import { Link } from "react-router-dom";
import './style.css'
function Navbar() {
    return(
        <nav className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/library'>Library</Link>
            <Link to='/login'>Login</Link>
        </nav>
    );
}

export default Navbar