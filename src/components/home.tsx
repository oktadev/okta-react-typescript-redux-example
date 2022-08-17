import { useOktaAuth } from "@okta/okta-react";
import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../redux-state/userProfileSlice";
import "../App.css";
import Dashboard from "./dashboard";
import { UserClaims } from "@okta/okta-auth-js";

type UserProfileExtra = Pick<UserClaims, "locale" | "preferred_username">;

const emptyUserContext = {
  preferred_username: "",
  locale: "",
} as UserProfileExtra;

export const UserContext = createContext(emptyUserContext);

export default function Home() {
  const dispatch = useDispatch();
  const { oktaAuth, authState } = useOktaAuth();
  const [userProfileExtra, setUserProfileExtra] = useState<UserProfileExtra>();

  const login = async () => oktaAuth.signInWithRedirect();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      oktaAuth
        .getUser()
        .then((userInfo: UserProfileExtra) => {

          dispatch(
            setUserProfile({
              type: "userProfile/userProfileSet",
              payload: userInfo,
            })
          );

          setUserProfileExtra({
            locale: userInfo.locale,
            preferred_username: userInfo.preferred_username,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [authState?.isAuthenticated, dispatch, oktaAuth]);

  return (authState?.isAuthenticated && userProfileExtra) ? (
    <UserContext.Provider value={userProfileExtra}>
      <Dashboard />
    </UserContext.Provider>
  ) : (
    <div className="section-wrapper">
      <div className="title">Use Redux to Manage Authenticated State in a React App</div>
      <button className="button" onClick={login}>
        Login
      </button>
    </div>
  );
}
