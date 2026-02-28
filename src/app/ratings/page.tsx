"use client";

import { useEffect } from "react";
import { useFirebaseAuth } from "@/providers/FirebaseAuthProvider";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  filterUserRatings,
  orderUserRatings,
  setOrderValue,
  setSearchValue,
  UserRatingsOrder,
  UserRatingsState,
} from "@/features/user-ratings/user-ratings-slice";
import { fetchUserRatings } from "@/features/user-ratings/actions/fetch-user-ratings";
import { Rating } from "@/collections/Rating";

import { PageContainer } from "@/components/layout/page";
import {
  RatingsHeader,
  RatingsHeaderContainer,
} from "@/components/features/ratings/ratings-header";
import { RatingsFilter } from "@/components/features/ratings/ratings-filter";
import { RatingsWrapper } from "@/components/features/ratings/ratings-wrapper";
import { RatingsContainer } from "@/components/features/ratings/ratings-container";
import { RatingCard } from "@/components/features/ratings/rating-card";
import { Input } from "@/components/shared/input";

export default function RatingsPage(): React.ReactNode {
  const { user } = useFirebaseAuth();
  const {
    untouchedRatings,
    filteredRatings,
    orderedRatings,
    searchValue,
    orderValue,
  }: UserRatingsState = useAppSelector((state) => state.userRatings);
  const dispatch = useAppDispatch();

  // TODO: Refactor this code. We should not import here `untouchedRatings`.
  // We should call this action somewhere in the redux slice.
  useEffect(() => {
    dispatch(filterUserRatings());
  }, [untouchedRatings, searchValue]);

  // TODO: Refactor this code. We should not import here the `filteredRatings`.
  // We should call this action somewhere in the redux slice.
  useEffect(() => {
    dispatch(orderUserRatings());
  }, [filteredRatings, orderValue]);

  useEffect(() => {
    if (!user) {
      // TODO: Implement proper error handling.
      return;
    }

    dispatch(fetchUserRatings(user.uid, user.significantOtherUid));
  }, []);

  return (
    <PageContainer id="ratings">
      <RatingsHeader>
        <RatingsHeaderContainer>
          <Input
            type="search"
            name="search"
            label="Search..."
            value={searchValue}
            onValueChange={(value: string) => dispatch(setSearchValue(value))}
          />

          <RatingsFilter />
        </RatingsHeaderContainer>
      </RatingsHeader>

      <RatingsWrapper>
        <RatingsContainer>
          {orderedRatings.map((rating: Rating) => (
            <RatingCard rating={rating} key={rating.uid} />
          ))}
        </RatingsContainer>
      </RatingsWrapper>
    </PageContainer>
  );
}
