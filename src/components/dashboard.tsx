import { useOktaAuth } from "@okta/okta-react";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../redux-state/dashboardSlice";
import "../App.css";
import { useState } from "react";

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
            <div>
              <span>Username: </span>
              {userProfile.preferred_username}
            </div>
            <div>
              <span>Email: </span>
              {userProfile.email}
            </div>
            <div>
              <span>Last name: </span>
              {userProfile.family_name}
            </div>
            <div>
              <span>Favorite color: </span>
              {userProfile.fav_color}
            </div>
            <div>
              <span>Locale: </span>
              {userProfile.locale}
            </div>
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
