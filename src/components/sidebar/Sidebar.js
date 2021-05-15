import React from "react";
import { useDispatch } from "react-redux";
import "./sidebar.scss";
import { logOut } from "../../redux/actions/auth.action";
import { Link, useHistory } from "react-router-dom";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };
  const history = useHistory();

  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
        <Link to="/">
      <li>
        <img src="/stems/Home.png" style={{ width: "30px" }} alt="Home" />
        <span>Home</span>
      </li>

        </Link>

      <Link to="/feed/subscriptions">
        <li>
          <img src="/stems/Subs.png" style={{ width: "30px" }} alt="Home" />
          <span>Subscriptions</span>
        </li>
      </Link>

      <li>
        <img src="/stems/Heart.png" style={{ width: "30px" }} alt="Home" />
        <span>Liked </span>
      </li>
      <li>
        <img src="/stems/Library.png" alt="Home" />
        <span>My Library</span>
      </li>
      <li>
        <img src="/stems/History.png" alt="Home" />
        <span>History</span>
      </li>
      <li>
        <img src="/stems/emoji.png" alt="Home" />
        <span>I dont know</span>
      </li>

      <hr />

      <li onClick={logOutHandler}>
        <img src="/stems/Logout.png" alt="logout" />
        <span>Log out</span>
      </li>
    </nav>
  );
};

export default Sidebar;
