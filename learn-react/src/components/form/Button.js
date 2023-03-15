import styled from 'styled-components';

const SubmitButton = styled.button`
  align-self: center;
  background-color: #505050;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  padding: 10px 15px;
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
    <SubmitButton type="submit" onClick={e => e.preventDefault()}>
      Sign Up
    </SubmitButton>
  );
}
