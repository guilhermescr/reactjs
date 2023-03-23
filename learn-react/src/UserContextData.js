import { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextData({ children }) {
  const [userData, setUserData] = useState({
    user: { username: '', password: '' },
    usernameInput: '',
    passwordInput: '',
    setNewUserData: (prop, value) => {
      if (prop === 'username') {
        setUserData({
          user: {
            username: value,
            password: userData.user.password
          },
          ...userData
        });
      }

      if (prop === 'password') {
        setUserData({
          user: {
            username: userData.user.username,
            password: value
          },
          ...userData
        });
      }

      if (prop === 'usernameInput') {
        setUserData({
          ...userData,
          usernameInput: value
        });
      }

      if (prop === 'passwordInput') {
        setUserData({
          ...userData,
          passwordInput: value
        });
      }
    }
  });

  return (
    <>
      <UserContext.Provider value={userData}>{children}</UserContext.Provider>
    </>
  );
}
