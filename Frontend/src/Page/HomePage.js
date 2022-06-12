import './HomePage.css';
import { useEffect, useState } from 'react';
import '../App.css';
import AppProfile from '../components/HomePage/AppProfile';
import AppSearch from '../components/HomePage/AppSearch';
import ProfileImg from '../components/HomePage/ProfileImg';
import ProfilePost from '../components/HomePage/ProfilePost';
import profiles from '../data/Profile';
import { StickyNav } from 'react-js-stickynav';
import AppHeader from '../components/HomePage/AppHeader';
import axios from "axios";
import { Link } from "react-router-dom";

function PageHome(props) {

    const [selectedProfile, setSelectedProfile] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [profileData, setProfileData] = useState({});
    useEffect(async () => {
        const token = localStorage.getItem("token");
        const response = await axios.get(
            "http://localhost:5500/profile/get",
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
            }
        );
        setProfileData(response.data);
    }, []);

    function onProfileOpenClick(theProfile) {
        setSelectedProfile(theProfile);
    }

    function onProfileCloseClick() {
        setSelectedProfile(null);
    }

    const filterProfiles = profiles.filter((profile) => {
        return profile.title.includes(searchText.toLocaleLowerCase());
    });

    const profileElements = filterProfiles.map((profile, index) => {
        return <ProfileImg key={index} profile={profile} onProfileOpenClick={onProfileOpenClick} />;
    });

    let profilePost = null;
    if (!!selectedProfile) {
        profilePost = <ProfilePost profile={selectedProfile} onProfileCloseClick={onProfileCloseClick} />;
    }

    return (
        <>

            <StickyNav>
                <AppHeader switchTheme={props.switchTheme} setTheme={props.setTheme} theme={props.theme} />
            </StickyNav>

            <section className="app-section-first">
                <div className="app-container">

                    {
                        profileData.user == null ?
                            <>
                                <div className="dont-profile">
                                    <div className="grid-text-profile">
                                        <p className="text-profile">You don't have a profile.</p>
                                    </div>
                                    <div className="grid-btn-create-profile">
                                        <Link to="/addprofile" switchTheme={props.switchTheme} setTheme={props.setTheme} theme={props.theme} themeGithub={props.themeGithub}><button class="button-create-profile" role="button">Create Profile</button></Link>
                                    </div>
                                </div>
                                {/* <AppProfile onProfileOpenClick={onProfileOpenClick} switchTheme={props.switchTheme} setTheme={props.setTheme} theme={props.theme} themeGithub={props.themeGithub} /> */}

                            </>
                            :
                            <AppProfile onProfileOpenClick={onProfileOpenClick} switchTheme={props.switchTheme} setTheme={props.setTheme} theme={props.theme} themeGithub={props.themeGithub} />
                    }


                    {
                        // <div className="app-myfriend">
                        //     <AppSearch value={searchText} onValueChange={setSearchText} />
                        //     <div className="app-grid">
                        //         {profileElements}
                        //     </div>
                        // </div>
                    }

                </div>
                {profilePost}
            </section>
        </>


    );
}

export default PageHome;