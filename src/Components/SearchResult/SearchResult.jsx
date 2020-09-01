import React, { useState, useEffect } from "react";
import CardArtist from "../CardArtist/CardArtist";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Gif from "../SearchResult/Gif.gif";

function SearchResult(props) {
  //Aqui traemos los datos del input de la home que pasa por los demas componentes
  const busquedaTraida = props.busqueda;

  const [albums, setAlbums] = useState([]); //INICIALIZAMOS EL ESTADO de donde traemos los albums
  const [errores, setErrores] = useState({
    // Inicializamos el estado de los errores
    loading: true,
    error: false,
    errorMensaje: "",
  });

  //Usamos useEffect para poder pasar los props de busqueda(lo que escribimos en el input de la home)
  useEffect(() => {
    loadingAlbums();
    async function loadingAlbums() {
      //Concatenamos la constante BusquedaTraida para que se actualize constantemente cada vez que cambie
      const reponse = await fetchData(
        "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" +
          busquedaTraida +
          "&api_key=25d7a95b848926418d0dd718c5c7aaac&format=json"
      );
      return reponse;
    }
  }, [busquedaTraida]);

  const fetchData = async (url) => {
    try {
      //CREAMOS LA FUNCION DATOSTRAIDOS QUE USA EL FETCH PARA TRAER LOS DATOS DE LA API Y TRANSFORMARLO EN JSON
      const data = await fetch(url);
      const dataParseada = await data.json();

      //SETEAMOS AL ALBUM(LE PASAMOS LOS DATOS YA TRANSFORMADO A JSON A ALBUMS)
      //Y MARCAMOS LA RUTA DONDE SE ENCUENTRA EL ARRAY QUE QUEREMOS MAPEAR
      if (dataParseada.error) {
        setErrores({
          error: true,
          errorMensaje: dataParseada.message,
          loading: false,
        });
      } else {
        setAlbums(dataParseada.results.albummatches.album);
        setErrores({ loading: false });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Container>
        <Grid container style={style.cardContent}>
          {errores.loading && <img src={Gif} alt="" style={style.alturaGif} />}
          {errores && <h1>{errores.errorMensaje}</h1>}
          {albums.map((item, i) => {
            //MAPEAMOS LA "VARIABLE" ALBUM QUE DECLARAMOS EN EL ESTADO, QUE FUE SETEADA CON LOS RESULTADOS(RUTA)
            if (item.name === null || item.image[3]["#text"] === "") {
              let errorAlbum = console.log("<= Albums no encontrados");
              return errorAlbum;
            } else {
              //GENERAMOS UNA CONDICION PARA QUE LAS IMAGENES T TITULOS QUE NO SE ENCUENTRAN NO LAS MUESTRE, SOLAMENTE MUESTRE LAS QUE SI ESTAN DISPONIBLES
              return (
                <Link to={"/artista?" + item.name} key={i}>
                  <CardArtist img={item.image[3]["#text"]} titulo={item.name} />
                </Link>
              );
            }
          })}
        </Grid>
      </Container>
    </>
  );
}
//pequeño estile para las cards

const style = {
  cardContent: {
    justifyContent: "center",
    padding: "50px 0",
  },
  alturaGif: {
    width: "500px",
  },
};
export default SearchResult;
