import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import LateralContent from "../components/LateralContent";

const root = () => {
  return (
    <>
      <NavigationBar />
      <div className="section">
        <div className="container is-display-flex">
          <LateralContent />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default root;
