"use client";

import { useEffect } from "react";
import { useFirebaseAuth } from "@/providers/FirebaseAuthProvider";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { UserRatingsState } from "@/features/user-ratings/user-ratings-slice";
import { fetchUserRatings } from "@/features/user-ratings/actions/fetch-user-ratings";
import { Rating } from "@/collections/Rating";

import { PageContainer } from "@/components/layout/page";
import { RatingsWrapper } from "@/components/features/ratings/ratings-wrapper";
import { RatingsContainer } from "@/components/features/ratings/ratings-container";
import { RatingCard } from "@/components/features/ratings/rating-card";

export default function RatingsPage(): React.ReactNode {
  const { user } = useFirebaseAuth();
  const { ratings }: UserRatingsState = useAppSelector(
    (state) => state.userRatings,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user) {
      // TODO: Implement proper error handling.
      return;
    }

    dispatch(fetchUserRatings(user.uid, user.significantOtherUid));
  }, []);

  return (
    <PageContainer id="ratings">
      <RatingsWrapper>
        <RatingsContainer>
          {ratings.map((rating: Rating) => (
            <RatingCard rating={rating} key={rating.uid} />
          ))}
        </RatingsContainer>
      </RatingsWrapper>
    </PageContainer>
  );
}
