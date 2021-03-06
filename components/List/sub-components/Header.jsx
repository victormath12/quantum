import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.span`
  margin-top: 4px;
  margin-bottom: 4px;
`;

Title.displayName = 'Header';

const Header = ({ children }) => <Title>{children}</Title>;

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Header.displayName = 'List.Header';

export default Header;
