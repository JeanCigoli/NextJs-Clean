import React from 'react';

import { Container, P } from './styled';

const Paragraph = ({ textAlign, fontSize, color, text }) => {
  return (
    <Container textAlign={textAlign}>

      <P color={color} fontSize={fontSize}>
        { text }
      </P>

    </Container>
  );
}

export default Paragraph;