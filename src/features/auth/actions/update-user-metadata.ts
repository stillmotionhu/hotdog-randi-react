import { usersCollection } from "@/app/firebase";
import { FetchError } from "@/types/fetch-error";
import { doc, Timestamp, updateDoc } from "firebase/firestore";

export type UpdateUserMetadataPayload = {
  lastSignInTime: string | undefined;
  registeredAt: string | undefined;
};

export async function updateUserMetadata(
  uid: string,
  payload: UpdateUserMetadataPayload,
): Promise<void | FetchError> {
  if (!(payload.lastSignInTime && payload.registeredAt)) {
    return {
      code: "auth/update-user-metadata-failed",
      message: "Failed to update user metadata: Missing required fields.",
      from: "firebase",
    };
  }

  const metadata = {
    lastSignInTime: Timestamp.fromDate(new Date(payload.lastSignInTime)),
    registeredAt: Timestamp.fromDate(new Date(payload.registeredAt)),
  };

  try {
    await updateDoc(doc(usersCollection, uid), { metadata });
  } catch (error) {
    // TODO: Better error handling.
    console.error(error);
  }
}
