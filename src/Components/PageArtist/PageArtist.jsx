import React, { useState, useEffect } from "react";
import CancionesCard from "./CancionesCard";
import InfoAlbum from "./InfoAlbum";
import Gif from "../SearchResult/Gif.gif";
// import ButtonAtras from "./ButtonAtras";
import { Container, Grid } from "@material-ui/core";

function PageArtist(props) {
  const [infoAlbums, setInfoalbums] = useState({
    image: [{ 0: "" }, { 1: "" }, { 2: "" }, { 3: "" }, { 4: "" }],
    wiki: {},
    tracks: {
      track: [],
    },
  });
  const [errores, setErrores] = useState({
    // Inicializamos el estado de los errores
    loading: true,
    error: false,
    errorMensaje: "",
  });
  useEffect(() => {
    loadingInfo();
    async function loadingInfo() {
      //Concatenamos la constante BusquedaTraida para que se actualize constantemente cada vez que cambie
      const reponse = await fetchData(
        "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=25d7a95b848926418d0dd718c5c7aaac&artist=zomboy&album=Resurrected&format=json"
      );
      return reponse;
    }
  }, []);

  const fetchData = async (url) => {
    try {
      //CREAMOS LA FUNCION DATOSTRAIDOS QUE USA EL FETCH PARA TRAER LOS DATOS DE LA API Y TRANSFORMARLO EN JSON
      const data = await fetch(url);
      const dataParseada = await data.json();

      // SETEAMOS AL ALBUM(LE PASAMOS LOS DATOS YA TRANSFORMADO A JSON A ALBUMS)
      // Y MARCAMOS LA RUTA DONDE SE ENCUENTRA EL ARRAY QUE QUEREMOS MAPEAR
      if (dataParseada.error) {
        setErrores({
          error: true,
          errorMensaje: dataParseada.message,
          loading: false,
        });
      } else {
        setInfoalbums(dataParseada.album);
        setErrores({ loading: false });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Container style={style.containerGeneral}>
        {errores.loading && <img src={Gif} alt="" style={style.alturaGif} />}
        {errores && <h1>{errores.errorMensaje}</h1>}
        <InfoAlbum
          titulo={infoAlbums.name}
          infoAlbum={infoAlbums.artist || infoAlbums.wiki.content}
          image={infoAlbums.image[3]["#text"]}
        />
        <Grid container>
          {infoAlbums.tracks.track.map((item, i) => {
            return (
              <CancionesCard
                tituloPrin={item.name}
                tiempo={item.duration}
                imageCancion={infoAlbums.image[2]["#text"]}
                url={item.url}
                key={i}
              />
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
const style = {
  containerGeneral: {
    padding: "50px 16px",
  },
  alturaGif: {
    width: "500px",
  },
};
export default PageArtist;
