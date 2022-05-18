import './RegisterPage.css';
import { Link } from "react-router-dom";
import { BiUserCircle, BiLock, BiLockAlt, BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

function RegisterPage() {

  return (
    <>
      <section className="app-section-second">
        <div className="card-register">
          <div className="register-form">
            <div className="title-register-form">Sign up</div>
            <form>
              <div className="form-group">
                <label className="icon-register" htmlFor="Username"><BiUserCircle size={21} /></label>
                <input className="input-register" type="text" name="Username" id="Username" placeholder="Your Username" />
              </div>
              <div className="form-group">
                <label className="icon-register" htmlFor="Email"><AiOutlineMail size={21} /></label>
                <input className="input-register" type="text" name="Email" id="Email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label className="icon-register" htmlFor="Phone"><BiPhone size={21} /></label>
                <input className="input-register" type="text" name="Phone" id="Phone" placeholder="Your Phone" />
              </div>
              <div className="form-group">
                <label className="icon-register" htmlFor="Password"><BiLock size={21} /></label>
                <input className="input-register" type="password" name="Password" id="Password" placeholder="Password" />
              </div>
              <div className="form-group">
                <label className="icon-register" htmlFor="ConfirmPassword"><BiLockAlt size={21} /></label>
                <input className="input-register" type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder="Repeat your password" />
              </div>
              <div className="btn-register">
                <p><Link to="/">Register</Link></p>
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