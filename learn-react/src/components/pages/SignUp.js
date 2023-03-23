import { useContext, useRef } from 'react';
import { UserContext } from '../../UserContextData';
import styled from 'styled-components';
import Form from '../form/Form';
import FormDiv from '../form/FormDiv';
import Label from '../form/Label';
import Input from '../form/Input';
import Button from '../form/Button';
import ReturnButton from '../route-buttons/ReturnButton';
import { useNavigate } from 'react-router-dom';

const H1Title = styled.h1`
  text-align: center;
`;

export default function SignUp() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const usernameInput = useRef();
  const passwordInput = useRef();

  function updateUserData(name) {
    console.log('Saving...');

    userContext.setNewUserData('usernameInput', usernameInput.current);
    userContext.setNewUserData('passwordInput', passwordInput.current);

    if (usernameInput.current.length && passwordInput.current.length) {
      userContext.setNewUserData('username', passwordInput.current.value);
      userContext.setNewUserData('password', passwordInput.current.value);
    }

    navigate(`/user/${name}`);
  }

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

        <Button
          saveUserData={updateUserData}
          username={usernameInput.current.value}
        ></Button>
      </Form>
    </>
  );
}
