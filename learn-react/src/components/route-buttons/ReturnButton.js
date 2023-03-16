import styled from 'styled-components';
import LinkButton from '../form/LinkButton';

const ReturnButtonElement = styled.button`
  background-color: #bbb;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 30px;
  width: 30px;
  &:hover {
    background-color: #aaa;
  }
  &:active {
    background-color: #999;
  }
`;

export default function ReturnButton() {
  return (
    <ReturnButtonElement tabIndex="-1">
      <LinkButton
        to="/"
        text="&lt;"
        alignItems="center"
        borderRadius="50%"
        color="#000"
        display="flex"
        height="100%"
        justifycontent="center"
        width="100%"
        hover={{ color: '#fff' }}
        active={{ color: '#fff' }}
      ></LinkButton>
    </ReturnButtonElement>
  );
}
