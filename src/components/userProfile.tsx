import { useSelector } from "react-redux";
import { selectUserProfile } from "../redux-state/dashboardSlice";
import "../App.css";

export default function UserProfile() {
  const userProfile = useSelector(selectUserProfile);

  return (
    <>
      <div>
        <span>Email: </span>
        {userProfile.email}
      </div>
      <div>
        <span>Last name: </span>
        {userProfile.family_name}
      </div>
    </>
  );
}
