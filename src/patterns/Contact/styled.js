import styled from "styled-components";
import { devices } from "../../config/device";

export const Container = styled.section`
  width: 100%;
  height: 700px;
  background-color: ${({ theme }) => theme.colors.grayBold};
  padding: 50px 0;

  @media ${devices.mobileL} {
    height: auto;
    padding: 20px 0;
  }
`;

export const Main = styled.div`
  max-width: 1500px;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media ${devices.mobileL} {
    width: 100%;
    flex-direction: column;
  }
`;

export const Separate = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  padding: ${({ padding }) => padding};

  p {
    padding-right: 30px;
  }

  @media ${devices.mobileL} {
    width: 95%;
    padding: 0 0;

    p {
      padding-right: 0px;
    }
  }
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

  @media ${devices.mobileL} {
    margin-bottom: 30px;
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

  @media ${devices.mobileL} {
    justify-content: center;
  }
`;
