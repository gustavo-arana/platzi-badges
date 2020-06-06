import React from "react";

import "./styles/BadgesList.css";
import logoTwitter from "../images/twitter.svg";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li className="BadgesListItem" key={badge.id}>
              <img
                className="BadgesListItem__avatar"
                src={badge.avatarUrl}
                alt="Logo Avatar Badge"
              />
              <div>
                <div className="font-weight-bold">
                  {badge.firstName} {badge.lastName}
                </div>
                <div className="BadgesListItem__twitter">
                  <img src={logoTwitter} alt="Logo Twitter" />
                  <span>@{badge.twitter}</span>
                </div>
                <span>{badge.jobTitle}</span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
