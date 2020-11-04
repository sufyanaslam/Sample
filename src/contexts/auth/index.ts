import { createContext } from 'react';
import { IAuthContext } from './IAuth';

const AuthContext = createContext<IAuthContext>({
  user: null,
  sessionId: null,
  setUser: (arg0: any | null) => {},
  setSessionId: (arg0: string | null) => {},
  updateUserInfo: () => {},
});

export default AuthContext;