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
    error: ""
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
      <>
          <div className="challengers-container">
            <header className="headline">
              <h2>{loggedIn.headline}</h2>
            </header>
            <div className="contestant-card-information">
              {contestantData.map(contestant => (
                <ContestantCardData
                  key={contestant.id}
                  contestant={contestant}
                />
              ))}
            </div>
          </div>
      </>
    );
  }
}

export default ContestantRender;
