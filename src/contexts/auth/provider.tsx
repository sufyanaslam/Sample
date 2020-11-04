import React, { ReactNode, useState } from 'react';
import AuthContext from './';
import {fetchCurrrentUserApi} from '../../helpers/apis'
interface IProps {
  children: ReactNode
}

function AuthProvider ({ children }: IProps) {
  const [sessionId, sessionIdSetter] = useState<string | null>(null);
  const [user, userSetter] = useState<any | null>(null);

  function setSessionId(id: string | null) {
    sessionIdSetter(id);
  }

  function setUser(user: object | null) {
    userSetter(user);
  }

  async function updateUserInfo() {
    const result = await fetchCurrrentUserApi();
    const { success, data } = result
    if (success) {
      if (data) {
        userSetter(data);
      }
    }
  }

  return (
    <AuthContext.Provider value={{
      sessionId,
      user,
      setSessionId,
      setUser,
      updateUserInfo
    }}>
      {children}
    </AuthContext.Provider>);
};

export default AuthProvider;