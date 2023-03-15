import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLinkButton = styled(Link)`
  background-color: #505050;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 10px 15px;
  width: max-content;
  &:hover {
    background-color: #404040;
  }
  &:active {
    background-color: #606060;
  }
`;

const CustomLinkButton = styled(Link)`
  align-items: center;
  border-radius: 50%;
  color: #000;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export default function LinkButton({ to, text, defaultStyles }) {
  return defaultStyles ? (
    <StyledLinkButton to={to}>{text}</StyledLinkButton>
  ) : (
    <CustomLinkButton to={to}>{text}</CustomLinkButton>
  );
}
