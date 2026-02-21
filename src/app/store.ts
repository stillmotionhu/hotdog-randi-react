import {
  configureStore,
  EnhancedStore,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";

/**
 * REDUCERS
 */
import authReducer from "@features/auth/auth-slice";
import signInReducer from "@features/sign-in/sign-in-slice";

const store: EnhancedStore = configureStore({
  reducer: {
    auth: authReducer,
    signIn: signInReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, any, UnknownAction>;

export { store };
