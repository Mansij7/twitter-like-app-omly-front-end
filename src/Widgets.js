import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search on Twitter here" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>
          Suggestions for accounts to <br />
          follow will show here
        </h2>
      </div>
    </div>
  );
}

export default Widgets;
