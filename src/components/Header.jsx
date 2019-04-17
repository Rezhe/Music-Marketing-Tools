import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Box, Container, NavLink } from 'rebass';

const Header = ({ brand, ...props }) => (
  <Box is="header" color="white" bg="#000" {...props}>
    <Container>
      <pre />
    </Container>
  </Box>
);

Header.propTypes = {
  brand: PropTypes.node.isRequired,
};

export default Header;
