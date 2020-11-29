import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 40px;
  position: relative;
`;

export const Label = styled.label`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.default};
  padding-left: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border-radius: ${({ theme }) => theme.spacing.short};
  outline: none;
  transition: all 0.3s;
  font-size: ${({ theme }) => theme.fontSizes.small};
  border: 2px solid ${({ theme }) => theme.colors.grayLight};

  :focus {
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }

  :active {
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const Error = styled.p`
  position: absolute;
  top: 70px;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
`;
