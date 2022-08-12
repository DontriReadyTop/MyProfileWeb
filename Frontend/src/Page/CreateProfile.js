import './CreateProfile.css';
import { StickyNav } from 'react-js-stickynav';
import AppHeader from '../components/HomePage/AppHeader';
import { useState } from 'react';
import ReactDOM from 'react-dom';

function CreateProfile(props) {

    const [values, setValues] = useState(
        {
            prefix_name: null,
            firstname: null,
            lastname: null,
            nickname: null,
            e_mail: null,
            phone: null,
            gender: null,
            birthday: null,
            hobby: null,
            about_me: null,
            address: null,


            website: null,
            website_link: null,
            github: null,
            github_link: null,
            facebook: null,
            facebook_link: null,
            instagram: null,
            instagram_link: null,
            experience: null,
            education: null,
            skill: null,
        }
    )

    const [social, setSocial] = useState([]);

    const isNull = (value) => {
        if (value == "") {
            return null;
        }
        return value;
    }

    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: isNull(value),
        });
    };

    // const handleChangeSocialSocial = e => {
    //     const { name, value } = e.target;

    //     let index = name.split("_");

    //     let tempData = social;

    //     tempData[index[1]].social = value;

    //     setSocial(tempData);

    //     console.log(social)

    // };

    // const handleChangeSocialNameAccount = e => {
    //     const { name, value } = e.target;

    //     let index = name.split("_");

    //     let tempData = social;

    //     tempData[index[2]].name_account = value;

    //     setSocial(tempData);

    //     console.log(social)

    // };

    // const handleChangeSocialLinkAccount = e => {
    //     const { name, value } = e.target;

    //     let index = name.split("_");

    //     let tempData = social;

    //     tempData[index[2]].link_account = value;

    //     setSocial(tempData);

    //     console.log(social)

    // };

    const addOnSelectStart = node => {
        if (!node) return;
        node.addEventListener("selectstart", e => {
            e.preventDefault();
        });
    };

    // const addSocial = () => {
    //     let tempData = {
    //         social_id: "social_0",
    //         social: null,
    //         name_account_id: "name_account_0",
    //         name_account: null,
    //         link_account_id: "link_account_0",
    //         link_account: null,
    //     }
    //     if (social.length == 0) {
    //         setSocial([tempData]);
    //     } else {
    //         setSocial(oldArray => [...oldArray,
    //         {
    //             social_id: "social_" + oldArray.length,
    //             social: null,
    //             name_account_id: "name_account_" + oldArray.length,
    //             name_account: null,
    //             link_account_id: "link_account_" + oldArray.length,
    //             link_account: null,
    //         }
    //         ]);
    //     }

    // }

    // const renderSocialMedia = () => {

    //     if (social.length == 0) return null;
    //     let result = [];
    //     social.forEach((val, index) => {

    //         result.push(
    //             <div className="form-group social-card">
    //                 <label htmlFor={`social_${index}`}>Social<span style={{ color: "red" }}>*</span></label>
    //                 <select
    //                     id={`social_${index}`}
    //                     className="form-control"
    //                     name={`social_${index}`}
    //                     value={social[index].social}
    //                     onChange={handleChangeSocialSocial}
    //                 >
    //                     <option value="">Choose...</option>
    //                     <option value="My Website">My Website</option>
    //                     <option value="Github">Github</option>
    //                     <option value="Gitlab">Gitlab</option>
    //                     <option value="Facebook">Facebook</option>
    //                     <option value="Instagram">Instagram</option>
    //                     <option value="LinkedIn">LinkedIn</option>
    //                     <option value="Osu!">Osu!</option>
    //                 </select>

    //                 {/* <label htmlFor={`name_account_${index}`}>Name Account<span style={{ color: "red" }}>*</span></label>
    //                 <input
    //                     type="text"
    //                     id={`name_account_${index}`}
    //                     className="form-control"
    //                     name={`name_account_${index}`}
    //                     value={social[index].name_account}
    //                     onChange={handleChangeSocialNameAccount}
    //                 />

    //                 <label htmlFor={`link_account_${index}`}>Link Account<span style={{ color: "red" }}>*</span></label>
    //                 <input
    //                     type="text"
    //                     id={`link_account_${index}`}
    //                     className="form-control"
    //                     name={`link_account_${index}`}
    //                     value={social[index].link_account}
    //                     onChange={handleChangeSocialLinkAccount}
    //                 /> */}
    //             </div>
    //         )

    //     });

    //     return result;
    // }

    console.log(social)
      
    return (

        <>

            <StickyNav>
                <AppHeader switchTheme={props.switchTheme} setTheme={props.setTheme} theme={props.theme} />
            </StickyNav>

            <section className="app-section-first">
                <div className="app-container">

                    <form className="grid-form-add">


                        <h1 className="title-profile">Create Your Profile .</h1>



                        <div className="grid-form-step1">

                            <h2 className="title-step1">Step1 : Personal Record .</h2>

                            <div className="form-group prefix-name">
                                <label htmlFor="prefix_name">Prefix Name<span style={{ color: "red" }}>*</span></label>
                                <select
                                    id="prefix_name"
                                    className="form-control"
                                    name="prefix_name"
                                    value={values.prefix_name}
                                    onChange={handleChange}
                                >
                                    <option value="">Choose...</option>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Master">Master</option>
                                    <option value="Mrs.">Mrs.</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Professor">Professor</option>
                                    <option value="Assistant Professor">Assistant Professor</option>
                                    <option value="Associate Professor">Associate Professor</option>
                                </select>

                            </div>

                            <div className="form-group firstname">
                                <label htmlFor="firstname">Firstname<span style={{ color: "red" }}>*</span></label>
                                <input
                                    type="text"
                                    id="firstname"
                                    className="form-control"
                                    name="firstname"
                                    value={values.firstname}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group lastname">
                                <label htmlFor="lastname">Lastname<span style={{ color: "red" }}>*</span></label>
                                <input
                                    type="text"
                                    id="lastname"
                                    className="form-control"
                                    name="lastname"
                                    value={values.lastname}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group nickname">
                                <label htmlFor="nickname">Nickname<span style={{ color: "red" }}>*</span></label>
                                <input
                                    type="text"
                                    id="nickname"
                                    className="form-control"
                                    name="nickname"
                                    value={values.nickname}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group e-mail">
                                <label htmlFor="e_mail">E-mail<span style={{ color: "red" }}>*</span></label>
                                <input
                                    type="email"
                                    id="e_mail"
                                    className="form-control"
                                    name="e_mail"
                                    value={values.e_mail}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group phone">
                                <label htmlFor="phone">Phone<span style={{ color: "red" }}>*</span></label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="form-control"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group gender">
                                <label htmlFor="gender">Gender<span style={{ color: "red" }}>*</span></label>
                                <select
                                    id="gender"
                                    className="form-control"
                                    name="gender"
                                    value={values.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Choose...</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="not specified">Not Specified</option>
                                </select>

                            </div>

                            <div className="form-group birthday">
                                <label htmlFor="birthday">Birthday<span style={{ color: "red" }}>*</span></label>
                                <input
                                    type="date"
                                    id="birthday"
                                    className="form-control"
                                    name="birthday"
                                    value={values.birthday}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group hobby">
                                <label htmlFor="hobby">Hobby<span style={{ color: "red" }}>*</span></label>
                                <input
                                    type="text"
                                    id="hobby"
                                    className="form-control"
                                    name="hobby"
                                    value={values.hobby}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group address">
                                <label htmlFor="address">Address<span style={{ color: "red" }}>*</span></label>
                                <textarea
                                    id="address"
                                    name="address"
                                    className="form-control form-control-textarea"
                                    value={values.address}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="form-group about-me">
                                <label htmlFor="about_me">About Me<span style={{ color: "red" }}>*</span></label>
                                <textarea
                                    id="about_me"
                                    name="about_me"
                                    className="form-control form-control-textarea"
                                    value={values.about_me}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                        </div>

                        <div className="grid-form-step2" id="step2">

                            <h2 className="title-step2">Step2 : Social Media .
                                <div className="btn-add-social" ref={addOnSelectStart} > {/* onClick={addSocial} */}
                                    <p>Add Social Media .</p>
                                </div>
                            </h2>

                            {/* <div className="form-group social-card">
                                <label htmlFor="social">Social<span style={{ color: "red" }}>*</span></label>
                                <select
                                    id="social"
                                    className="form-control"
                                    name="social"
                                // value={values.gender}
                                // onChange={handleChange}
                                >
                                    <option value="">Choose...</option>
                                    <option value="My Website">My Website</option>
                                    <option value="Github">Github</option>
                                    <option value="Gitlab">Gitlab</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="Osu!">Osu!</option>
                                </select>

                                <label htmlFor="name_account">Name Account<span style={{ color: "red" }}>*</span></label>
                                <input
                                    type="text"
                                    id="name_account"
                                    className="form-control"
                                    name="name_account"
                                />
                                <label htmlFor="link_account">Link Account<span style={{ color: "red" }}>*</span></label>
                                <input
                                    type="text"
                                    id="link_account"
                                    className="form-control"
                                    name="link_account"
                                />
                            </div> */}

                        </div>

                    </form>

                </div>
            </section>



        </>

    );
}

export default CreateProfile;