import type { Timestamp } from "firebase/firestore";

export interface Rating {
  uid: string;
  locationName: string;
  locationAddress: string;
  date: Timestamp;
  dogRating: number;
  dogNotes: string;
  bunRating: number;
  bunNotes: string;
  sauceRating: number;
  sauceNotes: string;
  sauceToDogRatioRating: number;
  sauceToDogRatioNotes: string;
  dogToBunRatioRating: number;
  dogToBunRatioNotes: string;
  overallTasteRating: number;
  overallTasteNotes: string;
  customerServiceRating: number;
  customerServiceNotes: string;
  overallExperienceRating: number;
  overallExperienceNotes: string;
  extras: string;
  score: number;
  metadata: {
    createdBy: string;
    createdAt: Timestamp;
  };
}
