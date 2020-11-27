import React from 'react';

import { Container, P } from './styled';

const Paragraph = ({ textAlign, color, text }) => {
  return (
    <Container textAlign={textAlign}>

      <P color={color}>
        { text }
      </P>

    </Container>
  );
}

export default Paragraph;