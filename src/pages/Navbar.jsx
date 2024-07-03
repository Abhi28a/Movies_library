import { Link } from 'react-router-dom';
import './styles.css'; 


function Navbar() {
    return (
            <>
                <nav>
                    <Link  to="/">Home</Link>
                    <Link  to="/library">Library</Link>
                    <Link  to="/login">Login</Link>
                </nav>
            </>
    );
}

export default Navbar;