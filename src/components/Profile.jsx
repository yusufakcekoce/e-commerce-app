import { useContext } from "react";
import { UserContext, UserDispatchContext } from "../UserProvider";

function Profile() {
  const userDetails = useContext(UserContext);
  

  return (
    <p> {userDetails.username} </p>
  )
}

export default Profile;