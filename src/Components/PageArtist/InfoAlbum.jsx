import React from "react";
import { Grid } from "@material-ui/core";

function InfoAlbum(props) {
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <div className="contentArtist">
          <img src={props.image} alt="" />
        </div>
        <div className="contentArtistDescription">
          <h2>{props.titulo}</h2>
          <p>{props.infoAlbum}</p>
          <h2>Canciones del album</h2>
        </div>
      </Grid>
    </>
  );
}
export default InfoAlbum;
