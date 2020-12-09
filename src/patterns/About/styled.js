import styled from 'styled-components';
import { devices } from '../../config/device';

export const Container = styled.section`
  width: 100%;
  height: 800px;
  background-color: ${({ theme }) => theme.colors.blackMedium};
  padding: 50px 0;

  @media ${devices.mobileL} {
    height: auto;
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

  @media ${devices.mobileL} {
    width: 100%;
    padding: 0 10px;
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

