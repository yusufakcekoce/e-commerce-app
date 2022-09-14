import { useContext } from "react";
import { UserContext, UserDispatchContext } from "../UserProvider";

function Profile() {
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserDispatchContext);

  return (
    <p> {userDetails.username} </p>
  )
}

export default Profile;