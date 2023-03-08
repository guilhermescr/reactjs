import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #323232;
  border: none;
  border-radius: 8px;
  color: #efefef;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #484848;
  }
  &:active {
    background-color: #252525;
  }
`;

export default StyledButton;
