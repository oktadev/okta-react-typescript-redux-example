import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface IUserProfile {
  email: string;
  given_name: string;
  family_name: string;
}

export interface IUserProfileExtra {
  fav_color: string;
  preferred_username: string;
  locale: string;
}

const initialState: IUserProfile = {
  email: "",
  given_name: "",
  family_name: "",
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      return {
        email: action.payload.payload.email,
        given_name: action.payload.payload.given_name,
        family_name: action.payload.payload.family_name,
      };
    },
  },
});

export const selectUserProfile = (state: RootState): IUserProfile =>
  state.userProfile;

export const { setUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
