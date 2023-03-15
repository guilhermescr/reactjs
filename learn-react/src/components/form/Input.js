import styled from 'styled-components';

const FormInput = styled.input`
  border: 1px solid #000;
  border-radius: 5px;
  padding: 6px;
  transition: all 0.3s ease;
  &:focus {
    border: none;
    box-shadow: 0 0 8px #000;
    outline: none;
    padding: 8px;
  }
`;

export default function Input({ type }) {
  return type === 'username' ? (
    <FormInput
      type="text"
      name="username"
      id="username"
      placeholder="Insert a username"
    />
  ) : (
    <FormInput
      type="password"
      name="password"
      id="password"
      placeholder="Insert a password"
    />
  );
}
