import { useReducer, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignin } from "../services/api.services";
import { setAuthToken } from "../utils/axios.utils";

const initialState: AuthState = {
  isAuthenticated: null,
  userId: null,
};

const reducer: (state: AuthState, action: AuthAction) => AuthState = (
  state: AuthState,
  action: AuthAction
) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, isAuthenticated: true, userId: action.payload };
    }
    case "LOGOUT": {
      return {
        isAuthenticated: false,
        userId: null,
      };
    }
    default: {
      return state;
    }
  }
};

const authContext = createContext<{
  auth: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  auth: initialState,
  dispatch: () => null,
});

export const useAuth = () => {
  return useContext(authContext);
};

export const ProvideAuth = ({ children }: React.PropsWithChildren) => {
  const [auth, dispatch] = useReducer(reducer, initialState);

  return (
    <authContext.Provider value={{ auth, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export const useProvideAuth = () => {
  const { auth, dispatch } = useAuth();
  const navigate = useNavigate();

  const signin = async (email: string, password: string) => {
    try {
      const response: AuthLoginResponse | void = await handleSignin(
        email,
        password
      );
      if (!response) throw new Error("ew");

      setAuthToken(response.token);
      dispatch({ type: "LOGIN", payload: response.uid });
      navigate("/admin/dashboard");
    } catch (error) {
      console.log("like idk", error);
    }
  };

  return {
    signin,
  };
};
