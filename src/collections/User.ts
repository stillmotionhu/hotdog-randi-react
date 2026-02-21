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
