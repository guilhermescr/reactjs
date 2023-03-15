import styled from 'styled-components';

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
`;

export default function Form({ children }) {
  return <FormElement>{children}</FormElement>;
}
