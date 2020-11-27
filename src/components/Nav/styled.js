import styled from 'styled-components';

export const Container = styled.nav`
  max-width: 80%;
  width: auto;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const NavList = styled.ul`
  width: 40%;
  height: 100%;
  max-width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NavButtons = styled.div`
  width: 25%;
  height: 100%;
  max-width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s;
  background-color: ${({ theme }) => theme.colors.gray}55;
  font-size: ${({ theme }) => theme.fontSizes.small};

  :hover {
    background-color: ${({ theme }) => theme.colors.gray}AA;
  }
`;

export const BtnGithub = styled(Btn)`
  color: ${({ theme }) => theme.colors.white};
  padding: 8px;
  border-radius: 16px;

  svg {
    font-size: ${({ theme }) => theme.fontSizes.large};
    padding-right: 8px;
  }
`;

export const BtnEmail = styled(Btn)`
  width: 50px;
  height: 50px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.blueLight};
  border-radius: 50%;

  svg {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

