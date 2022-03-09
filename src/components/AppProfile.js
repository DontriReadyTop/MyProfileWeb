import './AppProfile.css';
import AppProfileImage from './AppProfileImage';
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
                <AppProfilePI />
                <AppProfileSocial />
            </div>
        </div>
    );
}

export default AppProfile;




