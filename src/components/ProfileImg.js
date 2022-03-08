import { Profiler } from 'react';
import './ProfileImg.css';

function ProfileImg(props) {
    const { profile,onProfileOpenClick } = props;
    return (
        <div className="profile-img">
            <img src={profile.thumbnailUrl} onClick={() => {onProfileOpenClick(profile)}}/>
            <h2>{profile.name}</h2>
        </div>
    );
}



export default ProfileImg;