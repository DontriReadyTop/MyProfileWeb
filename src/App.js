import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import ProfileImg from './components/ProfileImg';
import ProfilePost from './components/ProfilePost';
import profiles from './data/Profile';

function App() {
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
        <div className="app">
            <AppHeader />
            <section className="app-section">
                <div className="app-container">

                    <div className="app-myprofile">
                        <div className="app-myprofile-titel">MyProfile</div>

                        <div className="app-myprofile-gird">

                            <div className="app-myprofile-image">
                                <img src="/images/dontriProfile.jpg" />
                                <div className="app-myprofile-image-name">DONTRI🎶</div>
                                <div className="app-myprofile-image-sub">Faculty of Science🧪</div>
                                <div className="app-myprofile-image-sub">Computer Science💻</div>
                                <div className="app-myprofile-image-sub-end">Silpakorn University🎓</div>
                            </div>

                            <div className="app-myprofile-pi">
                                <div className="app-myprofile-pi-content">
                                    <div>Full Name📝</div>
                                    <val>Mr.Trisinchai Kamjamnong</val>
                                </div>
                                <hr />
                                <div className="app-myprofile-pi-content">
                                    <div>Date of Birth🎂</div>
                                    <val>Thursday, August 19, 1999</val>
                                </div>
                                <hr />
                                <div className="app-myprofile-pi-content">
                                    <div>E-mail📧</div>
                                    <val>Kamjamnong.t@gmail.com</val>
                                </div>
                                <hr />
                                <div className="app-myprofile-pi-content">
                                    <div>Phone📞</div>
                                    <val>(+66) 62-432-8448</val>
                                </div>
                                <hr />
                                <div className="app-myprofile-pi-content">
                                    <div>Gender🚹</div>
                                    <val>Male</val>
                                </div>
                                <hr />
                                <div className="app-myprofile-pi-content">
                                    <div>Address📍</div>
                                    <val>1122,ChanMueng4,DinDaeng District,Bangkok,10400</val>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="app-myfriend">
                        <AppSearch value={searchText} onValueChange={setSearchText} />
                        <div className="app-grid">
                            {profileElements}
                        </div>
                    </div>

                </div>
            </section>
            {profilePost}
        </div>
    );
}

export default App;
