import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rating } from "@/collections/Rating";

/**
 * TYPES
 */
type UserRatingsStatus = "idle" | "loading" | "failed";

export interface UserRatingsState {
  ratings: Rating[];
  status: UserRatingsStatus;
}

/**
 * INITIAL STATE
 */
const initialState: UserRatingsState = {
  ratings: [],
  status: "loading",
};

/**
 * USER RATINGS SLICE
 */
const userRatingsSlice = createSlice({
  name: "user-ratings",
  initialState,
  reducers: {
    userRatingsIdle: (state: UserRatingsState) => {
      state.status = "idle";
    },
    userRatingsLoading: (state: UserRatingsState) => {
      state.status = "loading";
    },
    userRatingsFailed: (state: UserRatingsState) => {
      state.status = "failed";
    },
    setUserRatings: (
      state: UserRatingsState,
      action: PayloadAction<Rating[]>,
    ) => {
      state.ratings = action.payload;
    },
  },
});

const { actions, reducer } = userRatingsSlice;

export const {
  userRatingsIdle,
  userRatingsLoading,
  userRatingsFailed,
  setUserRatings,
} = actions;

export default reducer;
