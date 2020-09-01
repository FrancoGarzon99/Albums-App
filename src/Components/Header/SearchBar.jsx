import React from "react";
import Logo from "./Logo.png";
import { AppBar, Toolbar, Container, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

function SearchBar(props) {
  const dataEnviada = (e) => {
    //FUNCION DE ENVIAR FORMULARIO
    e.preventDefault();
  };

  const classes = useStyles(); //traemos los estilos que estan en la constante fuera de la funcion

  return (
    <>
      <AppBar position="static" className={classes.colorPrimary}>
        <Container>
          <Toolbar>
            <Link to="/">
              <img src={Logo} alt="" className={classes.imgLogo} />
            </Link>
            <form noValidate autoComplete="off" onSubmit={dataEnviada}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Buscar Artista"
                  type="text"
                  onChange={props.onChange}
                  value={props.value}
                />
              </div>
            </form>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
//ESTILOS DEL HEADER
const useStyles = makeStyles((theme) => ({
  colorPrimary: {
    backgroundColor: "#38b6ff",
  },
  imgLogo: {
    width: "250px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.3),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.4),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",

    pointerEvents: "none",
    display: "inline-flex",
    verticalAlign: "text-top",
  },
}));
export default SearchBar;
