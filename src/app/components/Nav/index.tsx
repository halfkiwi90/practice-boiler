import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <LinkWrapper>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  color: black;
`;

export default Nav;
