import styled from 'styled-components';
import { devices } from '../../config/device';

export const Container = styled.header`
  width: 100%;
  height: 800px;
  background-color: ${({ theme }) => theme.colors.grayBold};

  @media ${devices.mobileL} {
    height: auto;
  }
`;
