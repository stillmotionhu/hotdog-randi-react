"use client";

import { ParentComponentProps } from "@/types/parent-component-props";
import { store } from "./store";

import { Provider as ReduxProvider } from "react-redux";
import { FirebaseAuthProvider } from "@/providers/FirebaseAuthProvider";
import { NavigationProvider } from "@/providers/NavigationProvider";

const Providers: React.FC<ParentComponentProps> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <FirebaseAuthProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </FirebaseAuthProvider>
    </ReduxProvider>
  );
};

export { Providers };
