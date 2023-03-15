import LinkButton from '../form/LinkButton';

export default function Home() {
  return (
    <>
      <h1>Choose a route:</h1>
      <LinkButton to="/signup" text="Sign Up" defaultStyles={true} />
    </>
  );
}
