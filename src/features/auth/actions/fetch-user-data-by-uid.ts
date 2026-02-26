import {
  DocumentData,
  getDocs,
  Query,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { usersCollection } from "@/app/firebase";
import { User } from "@/collections/User";
import { AppDispatch } from "@/app/store";
import { FetchError } from "@/types/fetch-error";

export async function fetchUserDataByUid(
  uid: string,
): Promise<User | FetchError> {
  const userQuery: Query = query(usersCollection, where("uid", "==", uid));
  const userSnapshot: QuerySnapshot = await getDocs(userQuery);

  if (userSnapshot.empty) {
    return {
      code: "auth/user-not-found",
      message: "No user found with the provied UID.",
      from: "firebase",
    };
  }

  const userDoc: QueryDocumentSnapshot = userSnapshot.docs[0];
  const userData: DocumentData = userDoc.data();

  const user: User = {
    uid: userData.uid,
    email: userData.email,
    emailVerified: userData.email_verified,
    firstname: userData.firstname,
    lastname: userData.lastname,
    role: userData.role,
    significantOtherUid: userData.significant_other_uid,
    followings: userData.followings,
    followers: userData.followers,
    metadata: {
      registeredAt: userData.metadata.registered_at,
      lastSignIn: userData.metadata.last_sign_in,
    },
  };

  return user;
}
