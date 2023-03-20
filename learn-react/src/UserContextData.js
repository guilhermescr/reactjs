import { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextData({ children }) {
  const [userData, setUserData] = useState({
    user: { username: '', password: '' },
    usernameInput: '',
    passwordInput: '',
    setNewUserData: data => setUserData(data)
  });

  return (
    <>
      <UserContext.Provider value={userData}>{children}</UserContext.Provider>
    </>
  );
}
