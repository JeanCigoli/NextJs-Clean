import React from 'react';

import { Container, Heading1, Heading2, Heading3 } from './styled';

export const H1 = ({ textAlign, text, fontSize, color }) => {
  return (
    <Container textAlign={textAlign}>

      <Heading1 fontSize={fontSize} color={color}>
        { text }
      </Heading1>

    </Container>
  );
}

export const H2 = ({ textAlign, text, fontSize, color }) => {
  return (
    <Container textAlign={textAlign}>

      <Heading2 fontSize={fontSize} color={color}>
        { text }
      </Heading2>

    </Container>
  );
}

export const H3 = ({ textAlign, text, fontSize, color }) => {
  return (
    <Container textAlign={textAlign}>

      <Heading3 fontSize={fontSize} color={color}>
        { text }
      </Heading3>

    </Container>
  );
}