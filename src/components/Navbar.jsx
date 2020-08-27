import React from 'react';
import config from "../config";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { setUser, logOut } from "../redux/actions/userActions";

const Navbar = ({ user, setUser, logOut }) => {

  const responseGoogle = (response) => {
    if (response.error)
      return alert("Something has gone wrong, Please try again");
    const userObj = { ...response.profileObj, accessToken: response.accessToken };
    setUser(userObj);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse container" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active px-4">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>

          <li className="nav-item">
            {user === null ?
              (<GoogleLogin
                scope="https://www.googleapis.com/auth/youtube"
                clientId={config.client_id}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />) : (<GoogleLogout
                clientId={config.client_id}
                buttonText="Logout"
                onLogoutSuccess={logOut}
              />
              )}
          </li>
          {/*<li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

const stateMapper = storeState => {
  return {
    user: storeState.userState.user
  };
};

const dispatchMapper = { setUser, logOut };

export default connect(stateMapper, dispatchMapper)(Navbar);
