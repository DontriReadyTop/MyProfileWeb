import './HomePage.css';
import { useState } from 'react';
import '../App.css';
import AppProfile from '../components/HomePage/AppProfile';
import AppSearch from '../components/HomePage/AppSearch';
import ProfileImg from '../components/HomePage/ProfileImg';
import ProfilePost from '../components/HomePage/ProfilePost';
import profiles from '../data/Profile';
import { StickyNav } from 'react-js-stickynav';
import AppHeader from '../components/HomePage/AppHeader';

function PageHome(props) {
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [searchText, setSearchText] = useState('');

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
                    <AppProfile onProfileOpenClick={onProfileOpenClick} switchTheme={props.switchTheme} setTheme={props.setTheme} theme={props.theme} themeGithub={props.themeGithub} />

                    {/* <div className="app-myfriend">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {profileElements}
                    </div>
                </div> */}

                </div>
                {profilePost}
            </section>
        </>


    );
}

export default PageHome;