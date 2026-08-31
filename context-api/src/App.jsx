import { useState } from "react";
import { UserContext } from "./context/UserContext";
import UserProfile from "./components/UserProfile";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState("Yasir");
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <UserProfile />
        <UserCard />
      </UserContext.Provider>
    </>
  );
}

export default App;
