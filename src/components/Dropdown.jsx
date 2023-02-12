import { useState } from "react";

import "../index.scss";

import expandIcon from "../assets/icons/expand.png";
import reduceIcon from "../assets/icons/reduce.png";

function Dropdown(props) {
  const [isExpanded, toggleDropdown] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-header">
        <h2 className="dropdown-title">{props.title}</h2>
        {isExpanded ? (
          <img
            src={reduceIcon}
            alt=""
            className="dropdown-icon"
            onClick={() => toggleDropdown(!isExpanded)}
          />
        ) : (
          <img
            src={expandIcon}
            alt=""
            className="dropdown-icon"
            onClick={() => toggleDropdown(!isExpanded)}
          />
        )}
      </div>
      {isExpanded && <p className="dropdown-content">{props.content}</p>}
    </div>
  );
}

export default Dropdown;
