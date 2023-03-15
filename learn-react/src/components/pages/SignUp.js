import styled from 'styled-components';
import Form from '../form/Form';
import FormDiv from '../form/FormDiv';
import Label from '../form/Label';
import Input from '../form/Input';
import Button from '../form/Button';
import ReturnButton from '../route-buttons/ReturnButton';

const H1Title = styled.h1`
  text-align: center;
`;

export default function SignUp() {
  return (
    <>
      <ReturnButton />
      <H1Title>Sign up right now!</H1Title>
      <Form>
        <FormDiv>
          <Label text="Username:"></Label>
          <Input type="username" />
        </FormDiv>

        <FormDiv>
          <Label text="Password:"></Label>
          <Input type="password" />
        </FormDiv>

        <Button></Button>
      </Form>
    </>
  );
}
