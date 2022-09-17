import { useContext } from "react";
import { UserContext } from "../UserProvider";

function Profile() {
  const userDetails = useContext(UserContext);

  return (
    <div className="profile">
      <div className="profile__name">
        <p>{userDetails.username}</p>
      </div>
    </div>
  );
}

export default Profile;
