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

                            <div className="app-myprofile-image app-myprofile-tablet">
                                <img src="/images/dontriProfile.jpg" onClick={() => { onProfileOpenClick(profiles[0]) }} />
                                <div className="app-myprofile-image-name" >DONTRI🎶</div>
                                <div className="app-myprofile-image-sub">Faculty of Science🧪</div>
                                <div className="app-myprofile-image-sub">Computer Science💻</div>
                                <div className="app-myprofile-image-sub-end">Silpakorn University🎓</div>
                            </div>
                            <div className="app-myprofile-pi app-myprofile-tablet">
                                <div className="app-myprofile-pi-content">
                                    <div>📝Full Name</div>
                                    <val>Mr.Trisinchai Kamjamnong</val>
                                </div>
                                <hr />
                                <div className="app-myprofile-pi-content">
                                    <div>🎂Date of Birth</div>
                                    <val>Thursday, August 19, 1999</val>
                                </div>
                                <hr />
                                <div className="app-myprofile-pi-content">
                                    <div>📧E-mail</div>
                                    <val>Kamjamnong.t@gmail.com</val>
                                </div>
                                <hr />
                                <div className="app-myprofile-pi-content">
                                    <div>📞Phone</div>
                                    <val>(+66) 62-432-8448</val>
                                </div>
                                <hr />
                                <div className="app-myprofile-pi-content">
                                    <div>🚹Gender</div>
                                    <val>Male</val>
                                </div>
                                <hr />
                                <div className="app-myprofile-pi-content">
                                    <div>📍Address</div>
                                    <val>1122,ChanMueng4,DinDaeng District,Bangkok,10400</val>
                                </div>
                                <hr />
                                <div className="app-myprofile-pi-content">
                                    <div>🎮Hobby</div>
                                    <val>Playing Osu!, Playing game with friends, Coding website and Watching anime</val>
                                </div>
                            </div>

                            <div className="app-myprofile-social app-myprofile-tablet">

                                <a href="https://eager-albattani-fe35a1.netlify.app/" target="_blank">
                                    <div className="app-myprofile-social-content">
                                        <div>🌐Website</div>
                                        <val>https://eager-albattani-fe35a1.netlify.app/</val>
                                    </div>
                                </a>
                                <hr />
                                <a href="https://github.com/DontriReadyTop" target="_blank">
                                    <div className="app-myprofile-social-content">
                                        <div><img src="/images/github.png" />Github</div>
                                        <val>DontriReadyTop</val>
                                    </div>
                                </a>
                                <hr />
                                <a href="https://www.facebook.com/trisinchai.kamjamnong.1/" target="_blank">
                                    <div className="app-myprofile-social-content">
                                        <div><img src="/images/facebook.png" />Facebook</div>
                                        <val>ดนตรี.</val>
                                    </div>
                                </a>
                                <hr />
                                <a href="https://www.instagram.com/readytop_dontri/" target="_blank">
                                    <div className="app-myprofile-social-content">
                                        <div><img src="/images/instagram.png" />Instagram</div>
                                        <val>readytop_dontri</val>
                                    </div>
                                </a>
                                <hr />
                                <a href="https://osu.ppy.sh/users/22248071" target="_blank">
                                    <div className="app-myprofile-social-content">
                                        <div><img src="/images/osu.png" />Osu!</div>
                                        <val>ReadyTop</val>
                                    </div>
                                </a>
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
