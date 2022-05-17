import './AppHeader.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { useState, useEffect } from 'react';
import { useMediaPredicate } from "react-media-hook";


function AppHeader(props) {
    const [openNav, setOpenNav] = useState(false);
    const [menu, setMenu] = useState("none");

    const [openImgIcon, setOpenImgIcon] = useState(false);
    const [menuImgIcon, setMenuImgIcon] = useState("none");

    const [closeImgIcon, setCloseImgIcon] = useState(false);
    const [closeMenuImgIcon, setCloseMenuImgIcon] = useState("none");


    const openNavBar = () => {
        setOpenNav(!openNav);
        if (menu == "") {
            setMenu("none");
        } else {
            setMenu("");
        }
    }

    const openImageIcon = () => {
        setOpenImgIcon(!openImgIcon);
        if (menuImgIcon == "") {
            setMenuImgIcon("none");
        } else {
            setMenuImgIcon("");
        }
        closeMenuImageIcon()
    }

    const closeMenuImageIcon = () => {
        setCloseImgIcon(!closeImgIcon);
        if (closeMenuImgIcon == "none") {
            setCloseMenuImgIcon("block");
        } else {
            setCloseMenuImgIcon("none");
        }
        openImageIcon()
    }

    const biggerThen737 = useMediaPredicate("(min-width: 737px)");
    const lowerThen736 = useMediaPredicate("(max-width: 736px)");

    useEffect(() => {
        const handleWindowResize = () => {
            setOpenNav(false);
            setMenu("none");
            setOpenImgIcon(false);
            setMenuImgIcon("none");
            setCloseImgIcon(false);
            setCloseMenuImgIcon("none");
        }

        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // if (lowerThen736) {
    //     setOpenNav(false);
    //     setMenu("none")
    //     setOpenImgIcon(false);
    //     setMenuImgIcon("none");
    //     setCloseImgIcon(false);
    //     setCloseMenuImgIcon("none");
    // }

    // if (biggerThen737) {
    //     setOpenNav(false);
    //     setMenu("none")
    //     setOpenImgIcon(false);
    //     setMenuImgIcon("none");
    //     setCloseImgIcon(false);
    //     setCloseMenuImgIcon("none");
    // }

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
                    <>
                        <nav className="menus" style={{ display: "" }}>
                            {/* <nav className={openNav ? "menus" : "close-nav"}> */}
                            <ul className="nav__links">
                                <Link to="/">MyProfile</Link>
                                <Link to="#">AnimeList</Link>
                            </ul>
                        </nav>

                        <div className="app-login">
                            <a className="img-icon" onClick={openImageIcon}>
                                <img src="/images/dontriProfile.jpg" />
                            </a>
                        </div>

                        <div className="account-menu" style={{ display: menuImgIcon }}>
                            <ul className="account-menu-links">
                                <Link to="#">Edit account</Link>
                                <Link to="#">Sign out</Link>
                            </ul>
                        </div>
                    </>


                }
                {
                    lowerThen736 &&

                    <>
                        <nav className="menus" style={{ display: menu }}>
                            {/* <nav className={openNav ? "menus" : "close-nav"}> */}
                            <ul className="nav__links">
                                <Link to="/">My profile</Link>
                                <Link to="#">AnimeList</Link>
                                <Link to="#">Edit account</Link>
                                <Link to="#">Sign out</Link>
                            </ul>
                        </nav>

                        <div className="app-login">
                            <a className="img-icon" >
                                <img src="/images/dontriProfile.jpg" />
                            </a>
                        </div>
                    </>

                }



            </header>
            <div className="close-account-menu" style={{ display: closeMenuImgIcon }} onClick={closeMenuImageIcon}></div>

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