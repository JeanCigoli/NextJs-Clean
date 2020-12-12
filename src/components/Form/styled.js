import styled, { keyframes } from "styled-components";
import { devices } from "../../config/device";

const toast = keyframes`
  5% {
    top: 50px;
  }

  95% {
    top: 50px;
  }

  100% {
    top: -150px;
  }
`;

export const Container = styled.form`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing.smaller};
  padding: 40px;

  .animation {
    animation: ${toast} 5s linear;
  }

  @media ${devices.mobileL} {
    padding: 20px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.blueDark};
  border-radius: ${({ theme }) => theme.spacing.short};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  border: none;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :disabled {
    opacity: 0.6;
  }
`;

export const Toast = styled.div`
  width: 500px;
  height: 100px;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: ${({ theme }) => theme.spacing.base};
  z-index: 15;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: -150px;
  left: 50%;
  margin-left: -250px;
  box-shadow: 0.5px 0.5px 10px ${({ theme }) => theme.colors.blackMedium};
  padding: 0 30px;

  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.white};
  }

  @media ${devices.mobileL} {
    width: 100%;
    margin-left: -50%;
    padding: 20px 10px;
    height: auto;
  }
`;

export const Icon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.whiteOpacity};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  svg {
    color: ${({ theme, color }) => theme.colors[color]};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;
