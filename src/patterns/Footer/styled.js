import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.blackDark};
  padding: 50px 0;
`;

export const Main = styled.section`
  max-width: 1500px;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.spacing.smaller};
  cursor: pointer;
  transition: all 0.3s;
  font-size: ${({ theme }) => theme.fontSizes.medium};

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
    background-color: ${({ theme }) => theme.colors.grayBold};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Separate = styled.div`
  width: ${({ width }) => width};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};

  ${Icon} + ${Icon} {
    margin-left: 20px;
  }
`;

export const Title = styled.div`
  font-weight: lighter;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
