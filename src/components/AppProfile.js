import './AppProfile.css';
import AppProfileImage from './AppProfileImage';
import AppProfileAboutMe from './AppProfileAboutMe';
import AppProfilePI from './AppProfilePI';
import AppProfileSocial from './AppProfileSocial';
import profiles from '../data/Profile';
import AppProfileExperience from './AppProfileExperience';
import AppProfileEducation from './AppProfileEducation';
import AppProfileSkill from './AppProfileSkill';



function AppProfile(props) {
    const { onProfileOpenClick } = props;
    return (
        <div className="app-myprofile">
            <div className="app-myprofile-titel">MyProfile</div>
            <div className="app-myprofile-gird">
                <AppProfileImage profiles={profiles} onProfileOpenClick={onProfileOpenClick} />
                <AppProfileAboutMe />
                <AppProfilePI />
                <AppProfileSocial />
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




