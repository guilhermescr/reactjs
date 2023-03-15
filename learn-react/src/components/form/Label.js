import styled from 'styled-components';

const LabelElement = styled.label`
  font-weight: 500;
`;

export default function Label({ text }) {
  return <LabelElement>{text}</LabelElement>;
}
