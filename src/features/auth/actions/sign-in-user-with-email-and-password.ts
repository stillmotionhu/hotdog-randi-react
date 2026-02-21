import {
  getAuth,
  signInWithEmailAndPassword,
  type UserCredential,
} from "firebase/auth";
import { AppDispatch } from "@/app/store";
import { signInFailed, signInLoading } from "@/features/sign-in/sign-in-slice";
import { FirebaseError } from "firebase/app";
import { Error } from "@/types/error";

export type SignInPayload = {
  email: string;
  password: string;
};

export function signInUserWithEmailAndPassword(payload: SignInPayload) {
  return async function signInUserWithEmailAndPasswordThunk(
    dispatch: AppDispatch,
  ) {
    dispatch(signInLoading());

    const { email, password } = payload;

    if (!(email.trim() && password.trim())) {
      // TODO: Handle this case properly by dispatching a failure action with an appropriate error message.
      //throw new Error("The email address and password must be provided.");
    }

    const auth = getAuth();

    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      return userCredential;
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        let payload: Error;

        switch (error.code) {
          case "auth/invalid-credential":
            payload = {
              code: "sign-in/invalid-credential",
              message: "The provided email address or password is invalid.",
            };
            break;
          default:
            payload = {
              code: "sign-in/unknown-error",
              message: "An unknown error occurred during sign in.",
            };
        }

        dispatch(signInFailed(payload));

        return;
      }

      dispatch(
        signInFailed({
          code: "sign-in/unknown-error",
          message: "An unknown error occurred during sign in.",
        }),
      );
    }
  };
}
