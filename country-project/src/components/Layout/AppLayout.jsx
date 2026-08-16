import { Outlet } from "react-router-dom";
import Footers from "../UI/Footers.jsx";
import Headers from "../UI/Headers.jsx";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Headers />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footers />
    </div>
  );
};

export default AppLayout;
