// Dependencies.
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

// UI components.
import { Navbar, Nav, NavItem } from 'react-bootstrap';


// Define class.
class TopNav extends React.Component {

  // Render method.
  render() {
    const styles = {
      base: {
        margin: '10px 0 0',
      },
    };
    return (
      <Navbar inverse style={styles.base}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">React Boilerplate</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>

            <LinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>

            <LinkContainer to="/about">
              <NavItem eventKey={2}>About Us</NavItem>
            </LinkContainer>

            <LinkContainer to="/document-management">
              <NavItem eventKey={3}>Document Management</NavItem>
            </LinkContainer>

          </Nav>

          <Nav pullRight>

            <LinkContainer to="/contact">
              <NavItem eventKey={1}>Contact</NavItem>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch
});


// Export.
export default connect(mapDispatchToProps)(TopNav);
