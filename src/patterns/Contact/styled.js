import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 700px;
  background-color: ${({ theme }) => theme.colors.grayBold};
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
  flex-direction: column;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  padding: ${({ padding }) => padding};
`;

export const Icon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
  font-size: ${({ theme }) => theme.fontSizes.large};

  a {
    width: inherit;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.blackMedium};
  }
`;

export const SocialContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 60px;

  ${Icon} + ${Icon} {
    margin-left: 20px;
  }
`;

