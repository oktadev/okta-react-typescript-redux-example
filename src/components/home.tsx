import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { setUserProfile } from "../redux-state/dashboardSlice";
import "../App.css";

export default function Home() {
  const dispatch = useDispatch();
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => oktaAuth.signInWithRedirect();

  useEffect(() => {
    if (authState?.isAuthenticated) {
      oktaAuth
        .getUser()
        .then((info) => {
          dispatch(
            setUserProfile({
              type: "userProfile/userProfileSet",
              payload: info,
            })
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [authState?.isAuthenticated, dispatch, oktaAuth]);

  return authState?.isAuthenticated ? (
    <Redirect to="/Dashboard" />
  ) : (
    <div className="section-wrapper">
      <div className="title">Using React, Redux, and Okta</div>
      <button className="button" onClick={login}>
        Login
      </button>
    </div>
  );
}
