import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { User } from "@/collections/User";
import { FetchError } from "@/types/fetch-error";

/**
 * TYPES
 */
type AuthStatus = "idle" | "loading" | "failed";

export interface AuthState {
  user: User | null;
  status: AuthStatus;
  error: FetchError | null;
  isLoggedIn: boolean;
}

/**
 * INTIAL STATE
 */
const initialState: AuthState = {
  user: null,
  status: "loading",
  error: null,
  isLoggedIn: false,
};

/**
 * AUTH SLICE
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authIdle: (state: AuthState) => {
      state.status = "idle";
    },
    authLoading: (state: AuthState) => {
      state.status = "loading";
    },
    authFailed: (state: AuthState, action: PayloadAction<FetchError>) => {
      state.status = "failed";
      state.error = action.payload;
    },
    setUser: (state: AuthState, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export const { authIdle, authLoading, authFailed, setUser } = actions;

export default reducer;
