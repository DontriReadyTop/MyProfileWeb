import './PageHome.css';
import { useState } from 'react';
import '../App.css';
import AppProfile from '../components/AppProfile';
import AppSearch from '../components/AppSearch';
import ProfileImg from '../components/ProfileImg';
import ProfilePost from '../components/ProfilePost';
import profiles from '../data/Profile';

function PageHome() {
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
        <section className="app-section-first">
            <div className="app-container">
                <AppProfile onProfileOpenClick={onProfileOpenClick} />



                <div className="app-myfriend">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {profileElements}
                    </div>
                </div>
            </div>
            {profilePost}
        </section>
    );
}

export default PageHome;