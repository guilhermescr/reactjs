import styled from 'styled-components';
import LinkButton from './LinkButton';

const SubmitButton = styled.button`
  align-self: center;
  background-color: #505050;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  display: block;
  padding: 10px 0;
  width: max-content;
  &:hover {
    background-color: #404040;
  }
  &:active {
    background-color: #606060;
  }
`;

export default function Button() {
  return (
    <SubmitButton>
      <LinkButton to="/user/gui" text="Sign Up" padding="10px 30px" />
    </SubmitButton>
  );
}
