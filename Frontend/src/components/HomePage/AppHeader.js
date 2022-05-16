import './AppHeader.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from 'react';
import { useMediaPredicate } from "react-media-hook";


function AppHeader(props) {
    const [openNav, setOpenNav] = useState(false);
    const [menu, setMenu] = useState("none");

    const openNavBar = () => {
        setOpenNav(!openNav);
        if (menu == "") {
            setMenu("none");
        } else {
            setMenu("");
        }
    }

    const biggerThen737 = useMediaPredicate("(min-width: 737px)");
    const lowerThen736 = useMediaPredicate("(max-width: 736px)");

    return (
        <>
            {document.onselectstart = new Function("return false")}
            <header className="app-header grid-nav">
                <div className="close-menu" onClick={openNavBar}>
                    {openNav ? <VscChromeClose className="change-icon" size={30} /> : <GiHamburgerMenu className="change-icon" size={30} />}
                </div>
                <div className="app-link-logo">
                    <Link to="/" >
                        <img className="app-header-logo" src="/images/logo.png" />
                    </Link>
                </div>
                {
                    biggerThen737 &&
                    <nav className="menus" style={{ display: "" }}>
                        {/* <nav className={openNav ? "menus" : "close-nav"}> */}

                        <ul className="nav__links">
                            <Link to="/">MyProfile</Link>
                            <Link to="#">AnimeList</Link>
                            <Link to="#">Yoyo</Link>
                        </ul>
                    </nav>
                }
                {
                    lowerThen736 &&
                    <nav className="menus" style={{ display: menu }}>
                        {/* <nav className={openNav ? "menus" : "close-nav"}> */}

                        <ul className="nav__links">
                            <Link to="/">MyProfile</Link>
                            <Link to="#">About</Link>
                            <Link to="#">Yoyo</Link>
                        </ul>
                    </nav>
                }

                <div className="app-login">
                    <Link to="#">
                        <img src="/images/dontriProfile.jpg" />
                    </Link>
                </div>
            </header>


            {/* 
            <div id="menu">
                <a>hover me</a>
                <ul id="list">
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                </ul>
            </div> */}
        </>

    );
}

export default AppHeader;