import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 800px;
  background-color: ${({ theme }) => theme.colors.blackMedium};
  padding: 50px 0;
`;

export const Main = styled.div`
  max-width: 1500px;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Separate = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  padding: ${({ padding }) => padding};
`;
