import LinkButton from '../form/LinkButton';
import { Test } from '../form/LinkButton.styles';

export default function Home() {
  return (
    <div>
      <h1>Choose a route:</h1>
      <LinkButton to="/signup" text="Sign Up" />
      <Test>ABC</Test>
    </div>
  );
}
