export interface IAuthContext {
  sessionId: string | null;
  user: any | null;
  setUser: (arg0: any | null) => void;
  setSessionId: (arg0: string | null) => void;
  updateUserInfo: () => void,
}