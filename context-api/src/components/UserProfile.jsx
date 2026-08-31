import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserProfile() {
  const { user } = useContext(UserContext);
  return <div>Username : {user}</div>;
}

export default UserProfile;
