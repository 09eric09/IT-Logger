import React, {useEffect, useState} from "react";
import { useDispatch} from "react-redux";
import { logActions } from "./store";
import SearchBar from "./components/UI/SearchBar";
import Logs from "./components/logs/Logs";
import Container from "./components/UI/Container";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
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

  useEffect(()=> {
    //Initialize JS
    M.AutoInit();
  }, []);

  useEffect(()=> {
    getLogs();
  }, []);
  
  return (
    <>
    <SearchBar/>
    <Container>
      <AddLogModal/>
      <EditLogModal/>
      <AddTechModal/>
      <AddBtn/>
      <Logs/>
    </Container>
    </>
  );
}

export default App;
