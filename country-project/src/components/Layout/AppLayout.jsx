import { Outlet } from "react-router-dom";
import Footers from "../UI/Footers.jsx";
import Headers from "../UI/Headers.jsx"
const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footers />
    </>
  );
};

export default AppLayout;
