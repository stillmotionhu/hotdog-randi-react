import {
  getAuth,
  signInWithEmailAndPassword,
  type UserCredential,
} from "firebase/auth";
import { AppDispatch } from "@/app/store";
import { signInFailed, signInLoading } from "@/features/sign-in/sign-in-slice";
import { FirebaseError } from "firebase/app";
import { FormResponse } from "@/types/form-response";

export type SignInPayload = {
  email: string;
  password: string;
};

export function signInUserWithEmailAndPassword(payload: SignInPayload) {
  return async function signInUserWithEmailAndPasswordThunk(
    dispatch: AppDispatch,
  ): Promise<FormResponse> {
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

      return {
        success: true,
      };
    } catch (error) {
      if (error instanceof FirebaseError) {
        let payload: FormResponse;

        switch (error.code) {
          case "auth/invalid-credential":
            payload = {
              success: false,
              error: {
                code: "sign-in/invalid-credential",
                message: "The provided email address or password is invalid.",
                target: "password",
                secondaryTarget: "email",
              },
            };

            break;
          case "auth/too-many-requests":
            payload = {
              success: false,
              error: {
                code: "sign-in/too-many-requests",
                message: "Too many requests. Please try again later.",
                target: "password",
                secondaryTarget: "email",
              },
            };

            break;
          default:
            payload = {
              success: false,
              error: {
                code: "sign-in/unknown-error",
                message: "An unknown error occurred during sign in.",
                target: "password",
                secondaryTarget: "email",
              },
            };
        }

        dispatch(signInFailed());

        return payload;
      }

      dispatch(signInFailed());

      return {
        success: false,
        error: {
          code: "sign-in/unknown-error",
          message: "An unknown error occurred during sign in.",
          target: "password",
          secondaryTarget: "email",
        },
      };
    }
  };
}
