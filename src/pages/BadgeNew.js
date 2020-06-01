import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import NavBar from "../components/NavBar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                //avatarUrl="https://s.gravatar.com/avatar/b982d96529461949899e5b9e6e93272f?s=80"
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                email={this.state.form.email}
                avatarUrl="https://s.gravatar.com/avatar/b982d96529461949899e5b9e6e93272f?s=80"
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
