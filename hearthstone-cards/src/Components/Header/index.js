import './Navbar.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link className="logo" to="/">Hearthstone Cards</Link>
            <Link className='favoritos' to="/favoritos">Card</Link>
        </header>
    );
}

export default Header;
