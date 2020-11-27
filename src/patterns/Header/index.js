import React from 'react';
import Nav from '../../components/Nav';
import HeaderContainer from '../../components/Header';

import { Container } from './styled';

const Header = () => {
  return (
    <Container>

      <Nav />

      <HeaderContainer />

    </Container>
  );
}

export default Header;