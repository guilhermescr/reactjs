import LinkButton from '../form/LinkButton';

export default function Home() {
  return (
    <>
      <h1>Choose a route:</h1>
      <LinkButton
        to="/signup"
        text="Sign Up"
        backgroundColor="#505050"
        borderRadius="10px"
        color="#fff"
        padding="10px 15px"
        width="max-content"
      />
    </>
  );
}
