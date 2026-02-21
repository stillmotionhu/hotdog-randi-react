"use client";

import { ParentComponentProps } from "@/types/parent-component-props";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User as FirebaseUser } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { authIdle, AuthState, setUser } from "@features/auth/auth-slice";
import { fetchUserDataByUid, updateUserMetadata } from "@features/auth/actions";

const AuthProvider: React.FC<ParentComponentProps> = ({ children }) => {
  const auth = useAppSelector((state) => state.auth as AuthState);
  const dispatch = useAppDispatch();
  const router = useRouter();

  /**
   * HANDLE AUTH STATUS CHANGES
   */
  useEffect((): void => {
    onAuthStateChanged(getAuth(), async (user: FirebaseUser | null) => {
      if (user === null) {
        dispatch(setUser(null));
        dispatch(authIdle());

        return;
      }

      dispatch(fetchUserDataByUid(user.uid)).then((): void => {
        dispatch(authIdle());
      });

      dispatch(
        updateUserMetadata(user.uid, {
          lastSignInTime: user.metadata.lastSignInTime,
          registeredAt: user.metadata.creationTime,
        }),
      );
    });
  }, []);

  /**
   * REDIRECT TO HOME PAGE IF USER LOGGED IN OR OUT
   *
   * TODO: Refactor this shit. It should be only temporary.
   */
  useEffect(() => {
    if (auth.status !== "idle") {
      return;
    }

    router.push("/");
  }, [auth.user]);

  return children;
};

export { AuthProvider };
