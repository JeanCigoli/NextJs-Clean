import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
`;

export const Heading1 = styled.h1`
  font-size: ${({ theme, fontSize }) => theme.fontSizes[fontSize]};
  color: ${({ theme, color }) => theme.colors[color]};
  word-spacing: 2px;
  letter-spacing: 2px;
  font-weight: 500;
`;

export const Heading2 = styled.h2`
  font-size: ${({ theme, fontSize }) => theme.fontSizes[fontSize]};
  color: ${({ theme, color }) => theme.colors[color]};
  word-spacing: 2px;
  letter-spacing: 2px;
  font-weight: 500;
`;

export const Heading3 = styled.h3`
  font-size: ${({ theme, fontSize }) => theme.fontSizes[fontSize]};
  color: ${({ theme, color }) => theme.colors[color]};
  word-spacing: 2px;
  letter-spacing: 2px;
  font-weight: 500;
`;
