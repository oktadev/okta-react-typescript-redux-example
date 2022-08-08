import { useOktaAuth } from "@okta/okta-react";
import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  IUserProfileExtra,
  setUserProfile,
} from "../redux-state/dashboardSlice";
import "../App.css";
import Dashboard from "./dashboard";

const emptyUserContext = {
  fav_color: "",
  preferred_username: "",
  locale: "",
};

export const UserContext = createContext(emptyUserContext);

export default function Home() {
  const dispatch = useDispatch();
  const { oktaAuth, authState } = useOktaAuth();
  const [userProfileExtra, setUserProfileExtra] = useState<IUserProfileExtra>();

  const login = async () => oktaAuth.signInWithRedirect();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      oktaAuth
        .getUser()
        .then((userInfo: any) => {
          dispatch(
            setUserProfile({
              type: "userProfile/userProfileSet",
              payload: userInfo,
            })
          );

          setUserProfileExtra({
            fav_color: userInfo.fav_color,
            locale: userInfo.locale,
            preferred_username: userInfo.preferred_username,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [authState?.isAuthenticated, dispatch, oktaAuth]);

  console.log({ userProfileExtra });

  return authState?.isAuthenticated ? (
    <UserContext.Provider value={userProfileExtra || emptyUserContext}>
      <Dashboard />
    </UserContext.Provider>
  ) : (
    <div className="section-wrapper">
      <div className="title">Using React, Redux, and Okta</div>
      <button className="button" onClick={login}>
        Login
      </button>
    </div>
  );
}
