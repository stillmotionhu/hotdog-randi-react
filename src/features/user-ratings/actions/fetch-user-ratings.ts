import { AppDispatch } from "@/app/store";
import {
  DocumentData,
  getDocs,
  Query,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { ratingsCollecetion } from "@/app/firebase";
import { setUserRatings, userRatingsIdle } from "../user-ratings-slice";
import { Rating } from "@/collections/Rating";

export function fetchUserRatings(userUid: string, significantOtherUid: string) {
  return async function fetchUserRatingsThunk(
    dispatch: AppDispatch,
  ): Promise<void> {
    const ratingsQuery: Query = query(
      ratingsCollecetion,
      where("metadata.created_by", "in", [userUid, significantOtherUid]),
    );
    const ratingsSnapshot: QuerySnapshot = await getDocs(ratingsQuery);

    if (ratingsSnapshot.docs.length === 0) {
      dispatch(setUserRatings([]));
      dispatch(userRatingsIdle());

      return;
    }

    const ratings: Rating[] = ratingsSnapshot.docs.map(
      (doc: QueryDocumentSnapshot): Rating => {
        const data: DocumentData = doc.data();

        return {
          uid: doc.id,
          locationName: data.location_name,
          locationAddress: data.location_address,
          date: data.date,
          dogRating: data.dog_rating,
          dogNotes: data.dog_notes,
          bunRating: data.bun_rating,
          bunNotes: data.bun_notes,
          sauceRating: data.sauce_rating,
          sauceNotes: data.sauce_notes,
          sauceToDogRatioRating: data.sauce_to_dog_ratio_rating,
          sauceToDogRatioNotes: data.sauce_to_dog_ratio_notes,
          dogToBunRatioRating: data.dog_to_bun_ratio_rating,
          dogToBunRatioNotes: data.dog_to_bun_ratio_notes,
          overallTasteRating: data.overall_taste_rating,
          overallTasteNotes: data.overall_taste_notes,
          customerServiceRating: data.customer_service_rating,
          customerServiceNotes: data.customer_service_notes,
          overallExperienceRating: data.overall_experience_rating,
          overallExperienceNotes: data.overall_experience_notes,
          extras: data.extras,
          score: data.score,
          metadata: {
            createdBy: data.metadata.created_by,
            createdAt: data.metadata.created_at || data.date,
          },
        };
      },
    );

    dispatch(setUserRatings(ratings));
    dispatch(userRatingsIdle());
  };
}
