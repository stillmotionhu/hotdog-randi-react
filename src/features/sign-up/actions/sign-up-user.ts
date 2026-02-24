import { db } from "@/app/firebase";
import { UserDoc } from "@/collections/User";
import { SignUpFormPayload } from "@/features/sign-up/sign-up-slice";
import { FormResponse } from "@/types/form-response";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
} from "firebase/auth";
import { doc, DocumentReference, setDoc, Timestamp } from "firebase/firestore";

const unknownErrorResponse = {
  success: false,
  error: {
    code: "sign-up/unknown-error",
    message: "An unknown error occurred during sign in.",
    target: "confirmPassword",
  },
};

export async function signUpUser(data: SignUpFormPayload) {
  const auth = getAuth();
  const { firstname, lastname, email, password } = data;

  let userCredential: UserCredential;

  try {
    userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
  } catch (error) {
    if (error instanceof FirebaseError) {
      let response: FormResponse;

      switch (error.code) {
        case "auth/email-already-in-use":
          response = {
            success: false,
            error: {
              code: "sign-up/email-already-in-use",
              message: "This address is already being used with an account.",
              target: "email",
            },
          };

          break;
        default:
          response = unknownErrorResponse;
      }

      return response;
    }

    return unknownErrorResponse;
  }

  const user: UserDoc = {
    uid: userCredential.user.uid,
    email: email,
    email_verified: false,
    firstname: firstname,
    lastname: lastname,
    role: "user",
    significant_other_uid: "",
    followings: [],
    followers: [],
    metadata: {
      registered_at: Timestamp.fromDate(new Date()),
      last_sign_in: Timestamp.fromDate(new Date()),
    },
  };
  const userRef: DocumentReference = doc(db, "users", userCredential.user.uid);

  try {
    await setDoc(userRef, user);

    return {
      success: true,
    };
  } catch (error) {
    return unknownErrorResponse;
  }
}
