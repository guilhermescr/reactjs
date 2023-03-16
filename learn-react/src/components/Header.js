import styled from 'styled-components';
import LinkButton from './form/LinkButton';

const HeaderElement = styled.header`
  align-items: center;
  background-color: #afa3aa;
  color: #fafafa;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding-inline: 20px;
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
          <li>
            <LinkButton to="#" text="Sign Up" borderRadius="50%" color="#fff" />
          </li>
          <li>
            <LinkButton to="#" text="Sign In" borderRadius="50%" color="#fff" />
          </li>
        </UlElement>
      </nav>
    </HeaderElement>
  );
}
