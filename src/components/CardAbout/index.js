import React from 'react';
import { H2 } from '../foundation/Title';
import Paragraph from '../foundation/Paragraph';
import { Container } from './styled';

const CardAbout = ({ title, text, icon }) => {
  return (
    <Container>

      { icon }

      <H2 
        color='white'
        fontSize='large'
        text={title}
        textAlign='left'
      />

      <Paragraph 
        fontSize='small'
        color='whiteOpacity'
        text={text}
        textAlign='left'
      />

    </Container>
  );
}

export default CardAbout;