import React, { Component } from "react";
import FacebookRender from "./FacebookRender";
import ContestantCardData from "./ContestantCardData";

const API = "http://stateapi-test.votenow.tv/widgets/get?wid=";
const QUERY = "31204006f9270601";

class ContestantRender extends Component {
  state = {
    contestantData: [],
    loggedOut: {},
    loggedIn: {},
    error: "",
    isLoggedIn: false
  };

  loginHandler = isLoggedIn => {
    this.setState({ isLoggedIn });
  };

  componentDidMount() {
    fetch(API + QUERY)
      .then(response => response.json())
      .then(
        data => {
          this.setState({
            contestantData: data.data,
            loggedOut: data.text.logged_out,
            loggedIn: data.text.logged_in
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  render() {
    const { isLoggedIn, contestantData, loggedIn, loggedOut } = this.state;
    return (
      <div>
        {isLoggedIn ? (
          <div className="challengersContainer">
            <header className="headline">
              <h2>{loggedIn.headline}</h2>
            </header>

            <FacebookRender
              logout={loggedIn.logout_link_text}
              loginHandler={this.loginHandler}
              loggedIn={isLoggedIn}
            />
            <ul className="list">
              {contestantData.map(contestant => (
                <ContestantCardData
                  key={contestant.id}
                  contestant={contestant}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="LogInScreen">
            <h2>{loggedOut.headline}</h2>
            <FacebookRender
              loginText={loggedOut.login_button}
              loginHandler={this.loginHandler}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ContestantRender;
