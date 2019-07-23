import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Atelier from './../atelier/atelier'

class Dashboard extends Component {


  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="container-fluid">
        
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Administration</b> {user.name.split(" ")[0]}
            </h4>
            <button
              style={{
                width: "auto",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-primary"
            >
              Deconnexion
            </button>
          </div>
          <Atelier/>
        </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
