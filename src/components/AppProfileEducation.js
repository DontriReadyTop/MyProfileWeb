import './AppProfileEducation.css';

function AppProfileEducation() {
    return (
        <div data-aos="zoom-out-right" data-aos-duration="1000" className="app-myprofile-education app-myprofile-tablet">
            <div className="app-myprofile-education-content">
                <div className="app-myprofile-education-title">🏫Education</div>

                <div className="app-myprofile-education-edu">
                    <div className="app-myprofile-education-edu-name">
                        Silpakorn University
                    </div>
                    <div className="app-myprofile-education-edu-name-place">
                        Bachelor of Science in Computer Science, 2022
                    </div>
                    <ul className="app-myprofile-education-edu-message">
                        <li>
                            Cumulative GPA : 3.27
                        </li>
                        <li>
                            Second-class honors
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="app-myprofile-education-edu">
                    <div className="app-myprofile-education-edu-name">
                        Sri Ayudhya School
                    </div>
                    <div className="app-myprofile-education-edu-name-place">
                        Sciences And Mathematics Program, 2018
                    </div>
                    <ul className="app-myprofile-education-edu-message">
                        <li>
                            Cumulative GPA : 2.59
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AppProfileEducation;