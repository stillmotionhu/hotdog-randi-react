import { Timestamp } from "firebase/firestore";

/**
 * USER TYPES
 */
export type UserRole = "user" | "admin";
export type UserMetadata = {
  registeredAt: Timestamp;
  lastSignIn: Timestamp;
};

/**
 * USER COLLECTION
 */
export interface User {
  uid: string;
  email: string;
  emailVerified: boolean;
  firstname: string;
  lastname: string;
  role: UserRole;
  significantOtherUid: string;
  followings: string[];
  followers: string[];
  metadata: UserMetadata;
}

/**
 * USER DOC
 *
 * @description This interface is used to describe a Firebase document in the `users` collection.
 * This is used for creating a new document in the database.
 */
export interface UserDoc {
  uid: string;
  email: string;
  email_verified: boolean;
  firstname: string;
  lastname: string;
  role: UserRole;
  significant_other_uid: string;
  followings: string[];
  followers: string[];
  metadata: {
    registered_at: Timestamp;
    last_sign_in: Timestamp;
  };
}
