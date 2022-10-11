import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { logActions } from "./store/log-slice";
import { techActions } from "./store/tech-slice";
import SearchBar from "./components/UI/SearchBar";
import Logs from "./components/logs/Logs";
import Container from "./components/UI/Container";
import Modals from './components/UI/Modals';
import AddBtn from "./components/UI/AddBtn";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  const dispatch = useDispatch();

  const getLogs = () => {
    fetch(`/logs`)
    .then(res => res.json())
    .then(data => dispatch(logActions.replaceLogs(data || [])));
  }

  const getTechs = () => {
    fetch( `/techs`)
    .then(res => res.json())
    .then(data => dispatch(techActions.replaceTechs(data || [])));
  }
 
  useEffect(()=> {
    getLogs();
    getTechs();
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
