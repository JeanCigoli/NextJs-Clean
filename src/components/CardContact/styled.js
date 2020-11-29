import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 80px;
  transition: all 0.3s;
  border-radius: ${({ theme }) => theme.spacing.short};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  margin-top: 50px;
  cursor: pointer;

  svg {
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.blueLight};
    font-size: ${({ theme }) => theme.fontSizes.large};
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.blueLight};
    background-color: ${({ theme }) => theme.colors.blueLightOpacity};
  }
`;
