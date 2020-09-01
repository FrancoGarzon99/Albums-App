import React from "react";
import Fab from "@material-ui/core/Fab";
import ReplyIcon from "@material-ui/icons/Reply";
import { Link } from "react-router-dom";

function ButtonAtras() {
  return (
    <div>
      <Link to="/busqueda?">
        <Fab className="buttonAtras" aria-label="add">
          <ReplyIcon />
        </Fab>
      </Link>
    </div>
  );
}

export default ButtonAtras;
