import './AppHeader.css';
import { Link } from 'react-router-dom';


function AppHeader() {
    return (
        <header className="app-header">
            <Link className="app-link-logo" to="/" ><img className="app-header-logo" src="/images/logo.png" /></Link>
            <nav>
                <ul className="nav__links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Yoyo</Link></li>
                </ul>
            </nav>
            <Link className="app-login" to="#"><button>Login</button></Link>
        </header>
    );
}

export default AppHeader;