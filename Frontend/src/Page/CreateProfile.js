import './CreateProfile.css';
import { StickyNav } from 'react-js-stickynav';
import AppHeader from '../components/HomePage/AppHeader';

function CreateProfile(props) {
    return (

        <>

            <StickyNav>
                <AppHeader switchTheme={props.switchTheme} setTheme={props.setTheme} theme={props.theme} />
            </StickyNav>

            <section className="app-section-first">
                <div className="app-container">

                    <form className="grid-form-add">

                        <h2>Create Your Profile</h2>

                        <div className="form-group firstname">
                            <lable htmlFor="firstname">Firstname<span style={{ color: "red" }}>*</span></lable>
                            <input
                                type="text"
                                id="firstname"
                                className="form-control"
                                name="firstname"
                            // value={values.firstname}
                            // onChange={handleChange}
                            />
                        </div>

                        <div className="form-group lastname">
                            <lable htmlFor="lastname">Lastname<span style={{ color: "red" }}>*</span></lable>
                            <input
                                type="text"
                                id="lastname"
                                className="form-control"
                                name="lastname"
                            // value={values.firstname}
                            // onChange={handleChange}
                            />
                        </div>
                    </form>

                </div>
            </section>



        </>

    );
}

export default CreateProfile;