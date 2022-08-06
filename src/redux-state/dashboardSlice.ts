import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface UserProfileState {
  email: string;
  fav_color: string;
  given_name: string;
  preferred_username: string;
  locale: string;
  family_name: string;
}

const initialState: UserProfileState = {
  email: "",
  fav_color: "",
  given_name: "",
  preferred_username: "",
  locale: "",
  family_name: "",
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      return {
        email: action.payload.email,
        given_name: action.payload.given_name,
        fav_color: action.payload.fav_color,
        preferred_username: action.payload.preferred_username,
        locale: action.payload.locale,
        family_name: action.payload.family_name,
      };
    },
  },
});

export const selectUserProfile = (state: RootState): UserProfileState =>
  state.userProfile;

export const { setUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
