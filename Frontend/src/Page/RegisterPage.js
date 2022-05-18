import './RegisterPage.css';
import { Link } from "react-router-dom";
import { BiUserCircle, BiLock, BiLockAlt, BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from 'react';
import axios from 'axios';


function RegisterPage() {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  const addOnSelectStart = node => {
    if (!node) return;
    node.addEventListener("selectstart", e => {
      e.preventDefault();
    });
  };

  const checkEmpty = (temp) => {
    if (temp == "") {
      return null;
    } else {
      return temp;
    }
  }

  const handleUsernameChange = (event) => {
    setUsername(checkEmpty(event.target.value));
  }
  const handlePasswordChange = (event) => {
    setPassword(checkEmpty(event.target.value));
  }
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(checkEmpty(event.target.value));
  }
  const handleEmailChange = (event) => {
    setEmail(checkEmpty(event.target.value));
  }
  const handlePhoneChange = (event) => {
    setPhone(checkEmpty(event.target.value));
  }

  const submitRegister = async () => {
    if (username != null && password != null && confirmPassword != null && email != null && phone != null && password == confirmPassword) {
      const response = await axios.post(
        "http://localhost:5500/register",
        {
          username: username.toLowerCase(),
          password: password,
          email: email,
          phone: phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response.status == "200") {
        window.location = "/login"
      }
    }
  }

  return (
    <>
      <section className="app-section-second">
        <div className="card-register">
          <div className="register-form">
            <div className="title-register-form">Sign up</div>
            <form>
              <div className="form-group">
                <label className="icon-register" htmlFor="Username"><BiUserCircle size={21} /></label>
                <input className="input-register" type="text" name="Username" id="Username" placeholder="Your Username" value={username} onChange={handleUsernameChange} />
              </div>
              <div className="form-group">
                <label className="icon-register" htmlFor="Email"><AiOutlineMail size={21} /></label>
                <input className="input-register" type="text" name="Email" id="Email" placeholder="Your Email" value={email} onChange={handleEmailChange} />
              </div>
              <div className="form-group">
                <label className="icon-register" htmlFor="Phone"><BiPhone size={21} /></label>
                <input className="input-register" type="text" name="Phone" id="Phone" placeholder="Your Phone" value={phone} onChange={handlePhoneChange} />
              </div>
              <div className="form-group">
                <label className="icon-register" htmlFor="Password"><BiLock size={21} /></label>
                <input className="input-register" type="password" name="Password" id="Password" placeholder="Password" value={password} onChange={handlePasswordChange} />
              </div>
              <div className="form-group">
                <label className="icon-register" htmlFor="ConfirmPassword"><BiLockAlt size={21} /></label>
                <input className="input-register" type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="Repeat your password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
              </div>
              <div className="btn-register" ref={addOnSelectStart} onClick={submitRegister}>
                <p>Register</p>
              </div>
            </form>
          </div>
          <div className="register-img">
            <img src="/images/register.png" />
            <Link to="/login"><p>I am already member.</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterPage;