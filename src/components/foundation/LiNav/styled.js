import styled from 'styled-components';

export const Container = styled.li`
  width: auto;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.small};

  svg {
    font-size: calc(${({ theme }) => theme.fontSizes.small} + 0.1rem);
    padding: 0 5px;
    transition: color 0.2s;
    color: ${({ theme }) => theme.colors.grayBold};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.2s;
  }

  :hover {

    svg {
      color: ${({ theme }) => theme.colors.blueLight};
    } 

    a {
      color: ${({ theme }) => theme.colors.blueLight};
    }

  }
`;
