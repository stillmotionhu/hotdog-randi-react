import {
  configureStore,
  EnhancedStore,
  ThunkDispatch,
  UnknownAction,
} from "@reduxjs/toolkit";

import authReducer from "@/features/auth/auth-slice";

const store: EnhancedStore = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, any, UnknownAction>;

export { store };
