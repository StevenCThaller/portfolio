type AuthLoginResponse = {
  token: string;
  uid: string;
};

type AuthReducer<S, A> = (state: S, action: A) => S;
type AuthAction = { type: "LOGIN"; payload: string } | { type: "LOGOUT" };
type AuthState = {
  isAuthenticated: boolean | null;
  userId: string | null;
};
