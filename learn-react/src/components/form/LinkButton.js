import { Link } from 'react-router-dom';

export default function LinkButton({ to, text }) {
  return (
    <button>
      <Link to={to}>{text}</Link>
    </button>
  );
}