import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class toolbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">Overview Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Chart</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarBrand href="/" className="ml-auto" pullRight> Digital Status Dashboard</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
