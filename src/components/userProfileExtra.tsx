import "../App.css";
import { useContext } from "react";
import { UserContext } from "./home";

export default function UserProfileExtra() {
  const userProfileExtra = useContext(UserContext);

  return (
    <>
      <div>
        <span>Username: </span>
        {userProfileExtra.preferred_username}
      </div>
      <div>
        <span>Locale: </span>
        {userProfileExtra.locale}
      </div>
    </>
  );
}
