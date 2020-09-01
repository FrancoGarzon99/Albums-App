import React, { useState } from "react";
import { Container, Grid, Button, TextField } from "@material-ui/core";
import AlbumIcon from "@material-ui/icons/Album";
import "./HomePage.css";
import Logo from "./Logo2.png";

function HomePage(props) {
  const [busqueda, setBusqueda] = useState("");
  const dataEnviada = (e) => {
    e.preventDefault();
    props.history.push("/busqueda?" + busqueda);
  };

  return (
    <>
      <Container className="contentPrincipal">
        <Grid>
          <Grid container justify="center">
            <img src={Logo} className="logoPrincipal" alt="" />
          </Grid>
          <Grid>
            <Grid
              container
              item
              xs={12}
              className="contentForm"
              justify="center"
              alignItems="center"
            >
              <form
                noValidate
                autoComplete="off"
                name="BusquedaEnviada"
                onSubmit={dataEnviada}
                className="formContent"
              >
                <TextField
                  id="outlined-secondary"
                  label="Nombre de Artista"
                  variant="outlined"
                  onChange={(e) => {
                    setBusqueda(e.target.value);
                  }}
                  value={busqueda}
                />
                <Button
                  variant="contained"
                  color="default"
                  type="submit"
                  endIcon={<AlbumIcon />}
                >
                  Buscar Artista
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
