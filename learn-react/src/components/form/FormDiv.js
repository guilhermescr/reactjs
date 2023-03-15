import styled from 'styled-components';

const DivElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding-block: 5px;
`;

export default function FormDiv({ children }) {
  return <DivElement>{children}</DivElement>;
}
