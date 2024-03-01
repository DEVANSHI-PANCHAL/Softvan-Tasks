import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
// import './layout.css'; // Import the CSS file

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className="h1"> {/* Use the class name as a string */}
          webpack-for-react
        </Header>
      </Link>
      {children}
      <Divider />
      <p className="pullRight"> 
        Made with <Icon name="heart" color="red" /> by Devanshi Panchal
      </p>
    </Container>
  );
};

export default Layout;

