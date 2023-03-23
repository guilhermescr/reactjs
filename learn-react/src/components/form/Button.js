import styled from 'styled-components';

const SubmitButton = styled.button`
  align-self: center;
  background-color: #505050;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  display: block;
  padding: 10px 30px;
  width: max-content;
  &:hover {
    background-color: #404040;
  }
  &:active {
    background-color: #606060;
  }
`;

export default function Button({ saveUserData, username }) {
  function handleClick() {
    console.clear();
    console.log('Before Saving');
    saveUserData(username);
  }
  return <SubmitButton onClick={handleClick}>Sign Up</SubmitButton>;
}
