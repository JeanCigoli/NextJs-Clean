import styled from 'styled-components';
import image from "next/image";
import { devices } from '../../config/device';

export const Container = styled.section`
  max-width: 1500px;
  width: 80%;
  height: calc(100% - 100px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media ${devices.mobileL} {
    width: 100%;
    height: auto;
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

const ContainerFlex = styled.div`
  width: 50%;
  height: 100%;

  @media ${devices.mobileL} {
    width: 95%;
    height: auto;
    min-height: 300px;
  }
`;

export const ContainerText = styled(ContainerFlex)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-right: 120px;

  @media ${devices.mobileL} {
    padding-right: 0px;
    height: auto;
  }
`;

export const TextDev = styled.div`
  width: fit-content;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.blueLight};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.blackMedium};
  font-weight: 400;
  border-radius: ${({ theme }) => theme.spacing.shorter};
`;

export const ContainerImage = styled(ContainerFlex)`
  position: relative;

  @media ${devices.mobileL} {

    div {
      width: 100%;
    }

    text-align: center;

    display: flex;
    align-items: center;
  }
`;

export const Image = styled(image)`
  width: 90%;
  height: auto;
  object-fit: contain;
  position: absolute;
  bottom: 0;

  @media ${devices.mobileL} {
    position: relative;
    width: 90%;
  }
`;

export const AbsoluteCircle = styled.main`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.blackMedium};
  border-radius: 50%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OneCircle = styled(AbsoluteCircle)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  bottom: 200px;

  svg {
    font-size: ${({ theme }) => theme.fontSizes.xLarge};
    color: ${({ theme }) => theme.colors.blueLight};
  }

  @media ${devices.mobileL} {
    width: 60px;
    height: 60px;
    bottom: 100px;
    left: 10px;

    svg {
      font-size: ${({ theme }) => theme.fontSizes.large};
    }
  }
`;

export const TwoCircle = styled(AbsoluteCircle)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  bottom: 20px;
  right: 0;

  svg {
    font-size: ${({ theme }) => theme.fontSizes.xxLarge};
    color: ${({ theme }) => theme.colors.green};
  }

  @media ${devices.mobileL} {
    width: 80px;
    height: 80px;
    right: 30px;
    bottom: 10px;

    svg {
      font-size: ${({ theme }) => theme.fontSizes.xLarge};
    }
  }
`;

export const ThreeCircle = styled(AbsoluteCircle)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: 100px;
  right: 150px;

  svg {
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.red};
  }

  @media ${devices.mobileL} {
    width: 60px;
    height: 60px;
    top: 10px;
    right: 80px;

    svg {
      font-size: ${({ theme }) => theme.fontSizes.xLarge};
    }
  }
`;