"use client";

import { ParentComponentProps } from "@/types/parent-component-props";
import { store } from "./store";

import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@providers/AuthProvider";

const Providers: React.FC<ParentComponentProps> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </ReduxProvider>
  );
};

export { Providers };
