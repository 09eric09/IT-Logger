import React, {useEffect} from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(()=> {
    //Initialize JS
    M.AutoInit();
  }, []);
  
  return (
    <>
    
    </>
  );
}

export default App;
