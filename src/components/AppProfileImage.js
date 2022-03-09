import './AppProfileImage.css';

function AppProfileImage(props) {
    const { profiles, onProfileOpenClick } = props;
    return (
        <div className="app-myprofile-image app-myprofile-tablet">
            <img src="/images/dontriProfile.jpg" onClick={() => { onProfileOpenClick(profiles[0]) }} />
            <div className="app-myprofile-image-name" >DONTRI🎶</div>
            <div className="app-myprofile-image-sub">Faculty of Science🧪</div>
            <div className="app-myprofile-image-sub">Computer Science💻</div>
            <div className="app-myprofile-image-sub-end">Silpakorn University🎓</div>
        </div>
    );
}

export default AppProfileImage;