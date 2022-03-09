import './AppProfileSocial.css';

function AppProfileSocial() {
    return (
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
    );
}

export default AppProfileSocial;