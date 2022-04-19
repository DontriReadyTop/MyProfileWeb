import './AppProfilePI.css';

function AppProfilePI() {
    return (
        <div data-aos="fade-up-left" data-aos-duration="500" className="app-myprofile-pi app-myprofile-tablet">
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
    );
}

export default AppProfilePI;