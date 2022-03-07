import './ProfilePost.css';

function ProfilePost(props) {
    const { profile,onProfileCloseClick } = props;
    return (
        <div className="profile-post">
            <div className="profile-post-bg" onClick={onProfileCloseClick}/>
            <div className="profile-post-content">
                <img src={profile.thumbnailUrl} />
                <h4>{profile.title}</h4>
            </div>
        </div>
    );
}

export default ProfilePost;