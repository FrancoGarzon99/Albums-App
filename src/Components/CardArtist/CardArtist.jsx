import React from "react";
import { Grid } from "@material-ui/core";
import "./CardArtist.css";

function CardArtist(props) {
  return (
    <>
      <Grid className="contentImg">
        <div className="item">
          <img src={props.img} alt="" className="pic" />
          <p className="titulo">{props.titulo}</p>
        </div>
      </Grid>
    </>
  );
}

export default CardArtist;
