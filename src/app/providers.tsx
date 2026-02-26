"use client";

import { ParentComponentProps } from "@/types/parent-component-props";
import { store } from "./store";

import { Provider as ReduxProvider } from "react-redux";
import { FirebaseAuthProvider } from "@/providers/FirebaseAuthProvider";

const Providers: React.FC<ParentComponentProps> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <FirebaseAuthProvider>{children}</FirebaseAuthProvider>
    </ReduxProvider>
  );
};

export { Providers };
