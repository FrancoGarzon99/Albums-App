import React, { useState, useEffect } from "react";
import SearchBar from "../Header/SearchBar";
import SearchResult from "../SearchResult/SearchResult";

function PageSearchResult(props) {
  const [busqueda, setBusqueda] = useState(""); //HOOK USESTATE DE REACT donde guardamos el valor en el atributo value del input

  useEffect(() => {
    //Le pasamos la busqueda del input al componente searchResult
    let busquedaEnviada = props.history.location.search
      .substr(1)
      .replace("%20", " ");
    setBusqueda(busquedaEnviada);
  }, []);

  return (
    <>
      <SearchBar
        onChange={(e) => {
          setBusqueda(e.target.value);
        }}
        value={busqueda}
      />
      <SearchResult busqueda={busqueda} />
    </>
  );
}
export default PageSearchResult;
