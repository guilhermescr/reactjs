import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
