import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.grayBold};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.spacing.short};
  padding: 0 50px;

  svg {
    position: absolute;
    top: 50px;
    right: 50px;
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.blueLight};
  }

  h2 {
    margin: 0;
  }

  :hover {
    box-shadow: 0.5px 0.5px 15px ${({ theme }) => theme.colors.grayBold};
  }

  :hover h2, :hover svg{
    color: ${({ theme }) => theme.colors.blueLight};
  }
`;
