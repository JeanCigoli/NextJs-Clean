import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
`;

export const P = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.default};
  color: ${({ theme, color }) => theme.colors[color]};
  word-spacing: 1px;
  letter-spacing: 1px;
  font-weight: 400;
`;
