
interface User {
  email: string;
  password: string;
}

interface AuthState {
  loggedInUser: User | null;
}

const initialState: AuthState = {
  loggedInUser: null,
};

export const LOGIN = "LOGIN";

interface LoginAction {
  type: typeof LOGIN;
  payload: User;
}

type AuthAction = LoginAction;

export const loginAction = (user: User): AuthAction => ({
  type: LOGIN,
  payload: user,
});

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;