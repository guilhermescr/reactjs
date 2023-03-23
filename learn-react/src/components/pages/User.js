import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContextData';
import ReturnButton from '../route-buttons/ReturnButton';

export default function User() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <ReturnButton />
      <h1>Profile Page</h1>
      <h2>User: {userContext.user.username}</h2>
      <p>Password: {userContext.user.password}</p>
      <button onClick={() => navigate('/signup')}>Come back to SignUp</button>
    </>
  );
}
