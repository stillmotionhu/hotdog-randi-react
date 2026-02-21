import {
  getAuth,
  signInWithEmailAndPassword,
  type UserCredential,
} from "firebase/auth";
import { AppDispatch } from "@/app/store";

export type SignInPayload = {
  email: string;
  password: string;
};

export function signInUserWithEmailAndPassword(payload: SignInPayload) {
  return async function signInUserWithEmailAndPasswordThunk(
    dispatch: AppDispatch,
  ) {
    const { email, password } = payload;

    if (!(email.trim() && password.trim())) {
      throw new Error("The email address and password must be provided.");
    }

    const auth = getAuth();

    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      return userCredential;
    } catch (error) {
      // TODO: Handle error.
      console.error("Error signing in user with email and password:", error);
    }
  };
}
