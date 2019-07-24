import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Atelier from './../atelier/atelier'
import { Route, Switch,Link } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";


import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Dashboard extends Component {


  state = {
    modal5: false,
    
  }


  //popops login fonction 
  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };


  render() {
  
    const { user } = this.props.auth;

    return (
      <div className="container-fluid">

        <Switch>
            <Route path='/dashboard/ajout' component={Atelier} />
            {/* <Route path='/dashboard/article' component={Article} />
            <Route path='/dashboard/monProfil' component={MonProfil} /> */}
          </Switch>
          
          <MDBNavbar color="red" dark expand="md" style={{ marginTop: "1px" }} id="navbar">
          <MDBNavbarBrand>
            <img src="logo.png" alt="Logo" id="logoimage"/>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav left>

            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="" onClick={this.onLogoutClick} className="nav-header" >Deconnexion</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>


            <div className="wrapper">
              <nav id="sidebar">
              <center>
                  <div className="sidebar-header">
                  
                    <img src="logo.png" alt="logo" id="imagedash"/>
                        <h3 id="h3header">{user.name.split(" ")[0]}</h3>
                        <a id="li1" href="#">Ajouter nouveau atelier</a><br/>
                        <a id="li1" onClick={()=>{
                          return <Atelier/>
                        }} href="#">Voir tous les ateliers</a>
                  </div>
                  </center>
              </nav>
              
            </div>

            <div>
            <Atelier/>

         
</div>

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
