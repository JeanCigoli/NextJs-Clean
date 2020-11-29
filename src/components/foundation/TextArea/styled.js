import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 170px;
  margin-bottom: 50px;
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

export const TextArea = styled.textarea`
  width: 100%;
  height: 135px;
  border-radius: ${({ theme }) => theme.spacing.short};
  outline: none;
  transition: all 0.3s;
  font-size: ${({ theme }) => theme.fontSizes.small};
  border: 2px solid ${({ theme }) => theme.colors.grayLight};
  padding: ${({ theme }) => theme.spacing.short};

  :focus {
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }

  :active {
    border: 2px solid ${({ theme }) => theme.colors.blue};
  }
`;

export const Error = styled.p`
  position: absolute;
  top: 160px;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
`;

