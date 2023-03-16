import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButtonElement = styled(Link)`
  align-items: ${({ alignItems }) => alignItems};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'transparent'};
  border: ${({ border }) => (border ? border : 'none')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : 'none'};
  color: ${({ color }) => color};
  display: ${({ display }) => display};
  height: ${({ height }) => height};
  justify-content: ${({ justifycontent }) => justifycontent};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  &:hover {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? '#404040' : 'transparent'};
    color: ${({ hover }) => hover?.color};
  }
  &:active {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? '#606060' : 'transparent'};
    color: ${({ active }) => active?.color};
  }
`;

export default function LinkButton({
  to,
  text,
  alignItems,
  backgroundColor,
  border,
  borderRadius,
  color,
  display,
  height,
  justifycontent,
  padding,
  width,
  hover,
  active
}) {
  return (
    <LinkButtonElement
      to={to}
      alignItems={alignItems}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      color={color}
      display={display}
      height={height}
      justifycontent={justifycontent}
      padding={padding}
      width={width}
      hover={hover}
      active={active}
    >
      {text}
    </LinkButtonElement>
  );
}
