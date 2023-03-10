import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #8fa8ef;
  border: 2px solid
    ${({ variant, borderColor }) => (variant ? variant : borderColor)};
  border-radius: 8px;
  color: #efefef;
  cursor: pointer;
  display: block;
  margin-block: 5px;
  padding: 10px;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    background-color: #252525;
  }
`;
