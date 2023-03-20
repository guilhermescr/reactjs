import styled from 'styled-components';
import Form from '../form/Form';
import FormDiv from '../form/FormDiv';
import Label from '../form/Label';
import Input from '../form/Input';
import Button from '../form/Button';
import ReturnButton from '../route-buttons/ReturnButton';
import { useContext, useRef } from 'react';
import { UserContext } from '../../UserContextData';

const H1Title = styled.h1`
  text-align: center;
`;

export default function SignUp() {
  const usernameInput = useRef();
  const passwordInput = useRef();


  return (
    <>
      <ReturnButton />
      <H1Title>Sign up right now!</H1Title>
      <Form>
        <FormDiv>
          <Label text="Username:"></Label>
          <Input type="username" refConst={usernameInput} />
        </FormDiv>

        <FormDiv>
          <Label text="Password:"></Label>
          <Input type="password" refConst={passwordInput} />
        </FormDiv>

        <Button></Button>
      </Form>
    </>
  );
}
