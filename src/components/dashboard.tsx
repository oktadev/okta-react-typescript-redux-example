import { useOktaAuth } from "@okta/okta-react";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../redux-state/dashboardSlice";
import "../App.css";
import { useState } from "react";
import UserProfile from "./userProfile";
import UserProfileExtra from "./userProfileExtra";

export default function Dashboard() {
  const { oktaAuth } = useOktaAuth();
  const userProfile = useSelector(selectUserProfile);
  const [isExpanded, setIsExpanded] = useState(false);

  const logout = async () => oktaAuth.signOut();

  return (
    <div className="section-wrapper">
      <div className="title">Dashboard</div>
      <div className="profile-greeting">{`Hi ${userProfile.given_name}!`}</div>
      <div className="profile-more-wrapper">
        {isExpanded && (
          <>
            <UserProfile />
            <UserProfileExtra />
          </>
        )}
      </div>
      {
        <div
          className="profile-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </div>
      }
      <div>
        <button className="button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
