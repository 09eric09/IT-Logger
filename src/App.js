import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { logActions, techActions } from "./store";
import SearchBar from "./components/UI/SearchBar";
import Logs from "./components/logs/Logs";
import Container from "./components/UI/Container";
import Modals from './components/UI/Modals';
import AddBtn from "./components/UI/AddBtn";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

let isInit = true;

const App = () => {
  const logs = useSelector(state => state.log.logs);
  const techs = useSelector(state => state.tech.techs);
  const dispatch = useDispatch();
 
  useEffect(()=> {
    const getLogs = () => {
      fetch(`https://react-430ca-default-rtdb.firebaseio.com/logs.json`)
      .then(res => res.json())
      .then(data => dispatch(logActions.replaceLogs(data || [])));
    }
    getLogs();
  }, [dispatch]);

  useEffect(()=> {
    const sendLogs = () => {
      fetch(`https://react-430ca-default-rtdb.firebaseio.com/logs.json`, {
        method: 'PUT', 
        body: JSON.stringify(logs)
      })
    }
    if (isInit) {
      isInit = false;
      return;
    }
    sendLogs();
  }, [logs]);

  useEffect(()=> {
    const getTechs = () => {
      fetch( `https://react-430ca-default-rtdb.firebaseio.com/techs.json`)
      .then(res => res.json())
      .then(data => dispatch(techActions.replaceTechs(data || [])));
    }
    getTechs();
  }, []);

  useEffect(()=> {
    const sendTechs = () => {
      fetch(`https://react-430ca-default-rtdb.firebaseio.com/techs.json`, {
        method: 'PUT', 
        body: JSON.stringify(techs)
      })
    }
    if (isInit) {
      isInit = false;
      return;
    }
    sendTechs();
  }, [techs]);

  useEffect(()=> {
    M.AutoInit();
  }, []);
  
  return (
    <>
    <SearchBar/>
    <Container>
      <Modals/>
      <AddBtn/>
      <Logs/>
    </Container>
    </>
  );
}

export default App;
