import './AppProfile.css';
import AppProfileImage from './AppProfileImage';
import AppProfileAboutMe from './AppProfileAboutMe';
import AppProfilePI from './AppProfilePI';
import AppProfileSocial from './AppProfileSocial';
import profiles from '../../data/Profile';
import AppProfileExperience from './AppProfileExperience';
import AppProfileEducation from './AppProfileEducation';
import AppProfileSkill from './AppProfileSkill';
import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import ToggleBtn from './ToggleBtn';

function AppProfile(props) {

    const [toggled, setToggled] = useState(props.theme === 'light' ? false : true)
    const { onProfileOpenClick } = props;
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const handldClick = () => {
        setToggled((s) => !s);
        props.switchTheme();
    }
    console.log(toggled);

    return (
        <div className="app-myprofile" >

            <div className="app-myprofile-titel">MyProfile

                <ToggleBtn toggled={toggled} handldClick={handldClick} />

                {/* <button className='btn-theme-mode' onClick={props.switchTheme}>
                    switch to {props.theme === "light" ? "dark" : "light"}
                </button> */}

            </div>

            <div className="app-myprofile-gird">
                <AppProfileImage profiles={profiles} onProfileOpenClick={onProfileOpenClick} />
                <AppProfileAboutMe />
                <AppProfilePI />
                <AppProfileSocial themeGithub={props.themeGithub} />
                <AppProfileExperience />
            </div>
            <div className="app-myprofile-gird-education-skill">
                <AppProfileEducation />
                <AppProfileSkill />
            </div>
        </div>
    );
}

export default AppProfile;




