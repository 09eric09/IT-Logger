import React, {useEffect, useState} from "react";
import { useDispatch} from "react-redux";
import { logActions, techActions } from "./store";
import SearchBar from "./components/UI/SearchBar";
import Logs from "./components/logs/Logs";
import Container from "./components/UI/Container";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import AddBtn from "./components/UI/AddBtn";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  const dispatch = useDispatch();
  const getLogs = () => {
    fetch(`/logs`)
    .then(res => res.json())
    .then(data => dispatch(logActions.replaceLogs(data)));
  }

  const getTechs = () => {
    fetch( `/techs`)
    .then(res => res.json())
    .then(data => dispatch(techActions.replaceTechs(data)));
  }

  useEffect(()=> {
    getLogs();
    getTechs();
    //Initialize JS
    M.AutoInit();
  }, []);
  
  return (
    <>
    <SearchBar/>
    <Container>
      <AddLogModal/>
      <EditLogModal/>
      <AddTechModal/>
      <TechListModal/>
      <AddBtn/>
      <Logs/>
    </Container>
    </>
  );
}

export default App;
