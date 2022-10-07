import React, {useEffect} from "react";
import SearchBar from "./components/UI/SearchBar";
import Container from "./components/UI/Container";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(()=> {
    //Initialize JS
    M.AutoInit();
  }, []);
  
  return (
    <>
    <SearchBar/>
    <Container>
      
    </Container>
    </>
  );
}

export default App;
