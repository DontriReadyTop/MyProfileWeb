import './AppProfile.css';
import AppProfileImage from './AppProfileImage';
import AppProfileAboutMe from './AppProfileAboutMe';
import AppProfilePI from './AppProfilePI';
import AppProfileSocial from './AppProfileSocial';
import profiles from '../data/Profile';

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
            </div>
        </div>
    );
}

export default AppProfile;




