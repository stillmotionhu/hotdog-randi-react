import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rating } from "@/collections/Rating";

/**
 * TYPES
 */
type UserRatingsStatus = "idle" | "loading" | "failed";
export type UserRatingsOrder =
  | "date-asc"
  | "date-desc"
  | "score-asc"
  | "score-desc";

export interface UserRatingsState {
  untouchedRatings: Rating[];
  filteredRatings: Rating[];
  orderedRatings: Rating[];
  status: UserRatingsStatus;
  searchValue: string;
  orderValue: UserRatingsOrder;
}

/**
 * INITIAL STATE
 */
const initialState: UserRatingsState = {
  untouchedRatings: [],
  filteredRatings: [],
  orderedRatings: [],
  status: "loading",
  searchValue: "",
  orderValue: "date-desc",
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
    setSearchValue: (
      state: UserRatingsState,
      action: PayloadAction<string>,
    ) => {
      state.searchValue = action.payload;
    },
    setOrderValue: (
      state: UserRatingsState,
      action: PayloadAction<UserRatingsOrder>,
    ) => {
      state.orderValue = action.payload;
    },
    setUserRatings: (
      state: UserRatingsState,
      action: PayloadAction<Rating[]>,
    ) => {
      state.untouchedRatings = action.payload;
    },
    filterUserRatings: (state: UserRatingsState) => {
      const { untouchedRatings, searchValue } = state;

      if (!searchValue.trim()) {
        state.filteredRatings = untouchedRatings;
      }

      state.filteredRatings = untouchedRatings.filter((rating: Rating) =>
        rating.locationName.toLowerCase().includes(searchValue.toLowerCase()),
      );
    },
    orderUserRatings: (state: UserRatingsState) => {
      const { filteredRatings, orderValue } = state;

      state.orderedRatings = filteredRatings.sort(
        (a: Rating, b: Rating): number => {
          // TODO: Refactor this seems a little messy.
          switch (orderValue) {
            default:
            case "date-asc":
              if (a.date < b.date) {
                return -1;
              }

              if (a.date > b.date) {
                return 1;
              }

              return 0;
            case "date-desc":
              if (a.date > b.date) {
                return -1;
              }

              if (a.date > b.date) {
                return 1;
              }

              return 0;
            case "score-asc":
              if (a.score < b.score) {
                return -1;
              }

              if (a.score > b.score) {
                return 1;
              }

              return 0;
            case "score-desc":
              if (a.score > b.score) {
                return -1;
              }

              if (a.score > b.score) {
                return 1;
              }

              return 0;
          }
        },
      );
    },
  },
});

const { actions, reducer } = userRatingsSlice;

export const {
  userRatingsIdle,
  userRatingsLoading,
  userRatingsFailed,
  setSearchValue,
  setOrderValue,
  setUserRatings,
  filterUserRatings,
  orderUserRatings,
} = actions;

export default reducer;
