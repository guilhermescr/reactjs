export default function Input({ type }) {
  return type === 'username' ? (
    <input type="text" name="username" id="username" placeholder="User..." />
  ) : (
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Password..."
    />
  );
}
