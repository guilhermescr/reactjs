import styled from 'styled-components';

const HeaderElement = styled.footer`
  align-items: center;
  background-color: #afa3aa;
  color: #fafafa;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  text-align: center;
  width: 100%;
`;

const UlElement = styled.ul`
  align-items: center;
  display: flex;
  gap: 10px;
`;

export default function Header() {
  return (
    <HeaderElement>
      <h2>Auth Project</h2>
      <nav>
        <UlElement>
          <li>Sign Up</li>
          <li>Sign In</li>
        </UlElement>
      </nav>
    </HeaderElement>
  );
}
