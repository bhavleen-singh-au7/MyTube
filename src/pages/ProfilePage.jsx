import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const ProfilePage = ({ user }) => {
  return user || localStorage.getItem("accessToken") !== null ? <div></div> : <Redirect to="/" />;
};

const stateMapper = storeState => {
  return {
    user: storeState.userState.user
  };
};

export default connect(stateMapper)(ProfilePage);
