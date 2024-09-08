import React, { useState } from "react";
import "./Dropdown.css"; // Import your CSS file
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/AuthActions";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  const dispatch = useDispatch();
  const handleLogOut = () => {
    setIsOpen(false);
    dispatch(logout());
  };
  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        <img
          id="pdpColorEditor-3004275"
          src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20256%22%3E%3Crect%20width%3D%22256%22%20height%3D%22256%22%20fill%3D%22none%22%2F%3E%3Cline%20x1%3D%2296%22%20x2%3D%22216%22%20y1%3D%2264%22%20y2%3D%2264%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2212%22%2F%3E%3Cline%20x1%3D%2296.006%22%20x2%3D%22216%22%20y1%3D%22128%22%20y2%3D%22128%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2212%22%2F%3E%3Cline%20x1%3D%2296.006%22%20x2%3D%22216%22%20y1%3D%22192%22%20y2%3D%22192%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2212%22%2F%3E%3Cline%20x1%3D%2240%22%20x2%3D%2256%22%20y1%3D%2264%22%20y2%3D%2264%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2212%22%2F%3E%3Cline%20x1%3D%2240.006%22%20x2%3D%2256%22%20y1%3D%22128%22%20y2%3D%22128%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2212%22%2F%3E%3Cline%20x1%3D%2240.006%22%20x2%3D%2256%22%20y1%3D%22192%22%20y2%3D%22192%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%2212%22%2F%3E%3C%2Fsvg%3E"
         
          style={{
            width:"20px",
            height:"20px",
            loading:"lazy"
          }}
        ></img>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button
            onClick={() => handleOptionClick("Home")}
            className="dropdown-item"
          >
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "1.5rem",
                height: "1.5rem",
                cursor: "pointer",
              }}
              to={"/home"}
            >
              Home
            </Link>
          </button>
          <button
            onClick={() => handleOptionClick("Chat")}
            className="dropdown-item"
          >
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "1.5rem",
                height: "1.5rem",
                cursor: "pointer",
              }}
              to={"/Chat"}
            >
              Chat
            </Link>
          </button>
          <button onClick={handleLogOut} className="dropdown-item">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
