import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
  state = {
    userID: "",
    name: "",
    email: ""
  };

  responseFacebook = response => {
    const { loginHandler } = this.props;
    loginHandler(true);

    this.setState({
      userID: response.userID,
      name: response.name,
      email: response.email
    });
  };

  logOutHandler = () => {
    const { loginHandler } = this.props;
    loginHandler(false);
    window.FB.logout();
  };

  render() {
    const { name } = this.state;
    const { logout, loggedIn, loginText } = this.props;
    return (
      <div>
        {loggedIn ? (
          <section className="welcome">
            <p>
              Welcome {name}!
              <span id="logout-link" onClick={this.logOutHandler}>
                {logout}
              </span>
            </p>
          </section>
        ) : (
          <FacebookLogin
            appId="531029017304611"
            autoLoad={true}
            cssClass="fbbutton"
            textButton={loginText}
            callback={this.responseFacebook}
          />
        )}
      </div>
    );
  }
}
