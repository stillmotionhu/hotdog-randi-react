"use client";

import { ParentComponentProps } from "@/types/parent-component-props";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User as FirebaseUser } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchUserDataByUid, updateUserMetadata } from "@features/auth/actions";
import { User } from "@/collections/User";
import { FetchError } from "@/types/fetch-error";

type FirebaseAuthStatus = "idle" | "loading" | "failed";

interface FirebaseAuthContextState {
  user: User | null;
  status: FirebaseAuthStatus;
  error: FetchError | null;
  isAuthenticated: boolean;
}

const FirebaseAuthContext = createContext<FirebaseAuthContextState>(
  {} as FirebaseAuthContextState,
);

export const useFirebaseAuth = (): FirebaseAuthContextState => {
  const authContext: FirebaseAuthContextState = useContext(FirebaseAuthContext);

  if (authContext === undefined) {
    throw new Error(
      "useFirebaseAuth must be used within a FirebaseAuthProvider",
    );
  }

  return authContext;
};

export const FirebaseAuthProvider: React.FC<ParentComponentProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<FirebaseAuthStatus>("loading");
  const [error, setError] = useState<FetchError | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const router = useRouter();

  /**
   * HANDLE AUTH STATUS CHANGES
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      getAuth(),
      async (user: FirebaseUser | null) => {
        if (user === null) {
          setUser(null);
          setIsAuthenticated(false);
          setStatus("idle");

          return;
        }

        const fetchUserResponse = await fetchUserDataByUid(user.uid);

        if (!("uid" in fetchUserResponse)) {
          // TODO: Handle fetch user error.
          return;
        }

        setUser(fetchUserResponse);
        setIsAuthenticated(true);
        setStatus("idle");
      },
    );

    return unsubscribe;
  }, []);

  return (
    status !== "loading" && (
      <FirebaseAuthContext value={{ user, status, error, isAuthenticated }}>
        {children}
      </FirebaseAuthContext>
    )
  );
};
