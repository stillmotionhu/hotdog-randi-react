import { usersCollection } from "@/app/firebase";
import { AppDispatch } from "@/app/store";
import { doc, Timestamp, updateDoc } from "firebase/firestore";
import { authFailed } from "../auth-slice";

type UpdateUserMetadataPayload = {
  lastSignInTime: string | undefined;
  registeredAt: string | undefined;
};

function updateUserMetadata(uid: string, payload: UpdateUserMetadataPayload) {
  return async function updateUserMetadataThunk(dispatch: AppDispatch) {
    if (!(payload.lastSignInTime && payload.registeredAt)) {
      dispatch(
        authFailed({
          code: "auth/update-user-metadata-failed",
          message: "Failed to update user metadata: Missing required fields.",
        }),
      );

      return;
    }

    const metadata = {
      lastSignInTime: Timestamp.fromDate(new Date(payload.lastSignInTime)),
      registeredAt: Timestamp.fromDate(new Date(payload.registeredAt)),
    };

    await updateDoc(doc(usersCollection, uid), { metadata });
  };
}

export { type UpdateUserMetadataPayload, updateUserMetadata };
