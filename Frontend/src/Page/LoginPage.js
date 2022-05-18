import './LoginPage.css';
import { Link } from "react-router-dom";
import { BiUserCircle, BiLock } from "react-icons/bi";

function LoginPage() {

  return (
    <>
      <section className="app-section-second">
        <div className="card-login">
          <div className="login-form">
            <div className="title-login-form">Sign in</div>
            <form>
              <div className="form-group">
                <label className="icon-login" htmlFor="Username"><BiUserCircle size={21} /></label>
                <input className="input-login" type="text" name="Username" id="Username" placeholder="Username" />
              </div>
              <div className="form-group">
                <label className="icon-login" htmlFor="Password"><BiLock size={21} /></label>
                <input className="input-login" type="password" name="Password" id="Password" placeholder="Password" />
              </div>
              <div className="btn-login">
              <p><Link to="/">Log in</Link></p>
              </div>
            </form>
          </div>
          <div className="login-img">
            <img src="/images/login.png" />
            <Link to="/register"><p>Create an account.</p></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;