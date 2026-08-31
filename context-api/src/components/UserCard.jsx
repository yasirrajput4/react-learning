import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserCard() {
  const { user } = useContext(UserContext);
  return <div>UserCard {user}</div>;
}

export default UserCard;
