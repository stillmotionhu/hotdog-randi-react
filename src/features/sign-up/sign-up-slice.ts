import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * TYPES
 */
type SignUpStatus = "idle" | "loading" | "failed";

export interface SignUpState {
  data: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  isSubmitButtonDisabled: boolean;
  status: SignUpStatus;
}

/**
 * INITIAL STATE
 */
const initialState: SignUpState = {
  data: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  isSubmitButtonDisabled: true,
  status: "idle",
};

/**
 * SIGN UP SLICE
 */
const signUpSlice = createSlice({
  name: "sign-up",
  initialState,
  reducers: {
    signUpIdle: (state: SignUpState) => {
      state.status = "idle";
    },
    signUpLoading: (state: SignUpState) => {
      state.status = "loading";
    },
    signUpFailed: (state: SignUpState) => {
      state.status = "failed";
    },
    setSignUpFirstname: (state: SignUpState, action: PayloadAction<string>) => {
      state.data.firstname = action.payload;
    },
    setSignUpLastname: (state: SignUpState, action: PayloadAction<string>) => {
      state.data.lastname = action.payload;
    },
    setSignUpEmail: (state: SignUpState, action: PayloadAction<string>) => {
      state.data.email = action.payload;
    },
    setSignUpPassword: (state: SignUpState, action: PayloadAction<string>) => {
      state.data.password = action.payload;
    },
    setSignUpConfirmPassword: (
      state: SignUpState,
      action: PayloadAction<string>,
    ) => {
      state.data.confirmPassword = action.payload;
    },
    handleSignUpFormOnChange: (state: SignUpState) => {
      const { data } = state;
      const { firstname, lastname, email, password, confirmPassword } = data;

      state.isSubmitButtonDisabled = !(
        firstname.trim() &&
        lastname.trim() &&
        email.trim() &&
        password.trim() &&
        confirmPassword.trim()
      );
    },
  },
});

const { actions, reducer } = signUpSlice;

export const {
  signUpIdle,
  signUpLoading,
  signUpFailed,
  setSignUpFirstname,
  setSignUpLastname,
  setSignUpEmail,
  setSignUpPassword,
  setSignUpConfirmPassword,
  handleSignUpFormOnChange,
} = actions;

export default reducer;
