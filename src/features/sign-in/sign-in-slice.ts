import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * TYPES
 */
type SignInStatus = "idle" | "loading" | "failed";

export interface SignInState {
  data: {
    email: string;
    password: string;
  };
  isSubmitButtonDisabled: boolean;
  status: SignInStatus;
}

/**
 * INITIAL STATE
 */
const initialState: SignInState = {
  data: {
    email: "",
    password: "",
  },
  isSubmitButtonDisabled: true,
  status: "idle",
};

/**
 * SIGN IN SLICE
 */
const signInSlice = createSlice({
  name: "sign-in",
  initialState,
  reducers: {
    signInIdle: (state: SignInState) => {
      state.status = "idle";
    },
    signInLoading: (state: SignInState) => {
      state.status = "loading";
    },
    signInFailed: (state: SignInState) => {
      state.status = "failed";
    },
    setSignInEmail: (state: SignInState, action: PayloadAction<string>) => {
      state.data.email = action.payload;
    },
    setSignInPassword: (state: SignInState, action: PayloadAction<string>) => {
      state.data.password = action.payload;
    },
    handleSignInFormOnChange: (state: SignInState) => {
      const { data } = state;
      const { email, password } = data;

      state.isSubmitButtonDisabled = !(email.trim() && password.trim());
    },
  },
});

const { actions, reducer } = signInSlice;

export const {
  signInIdle,
  signInLoading,
  signInFailed,
  setSignInEmail,
  setSignInPassword,
  handleSignInFormOnChange,
} = actions;

export default reducer;
