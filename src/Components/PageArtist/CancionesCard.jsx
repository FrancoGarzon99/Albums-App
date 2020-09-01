import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

//FUNCION CANCIONES CARD
function CancionesCard(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container item xs={6} className="contentcarddd" justify="center">
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6">
                {props.tituloPrin}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Duración : {props.tiempo}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon className={classes.playIcon} />
              </IconButton>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={props.imageCancion}
            title="Live from space album cover"
          />
        </Card>
      </Grid>
    </>
  );
}
//ESTILOS DE CANCIONES CARD
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));
export default CancionesCard;
