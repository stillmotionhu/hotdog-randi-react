import { Error } from "@/types/error";
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
  error: Error | null;
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
  error: null,
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
    signInFailed: (state: SignInState, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    setSignInEmail: (state: SignInState, action: PayloadAction<string>) => {
      state.data.email = action.payload;
    },
    setSignInPassword: (state: SignInState, action: PayloadAction<string>) => {
      state.data.password = action.payload;
    },
    handleFormOnChange: (state: SignInState) => {
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
  handleFormOnChange,
} = actions;

export default reducer;
