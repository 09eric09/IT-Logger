import React, {useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logActions } from "./store/log-slice";
import { techActions } from "./store/tech-slice";
import SearchBar from "./components/UI/SearchBar";
import Home from "./components/pages/Home";
import TechInfo from '../src/components/pages/TechInfo';
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
    <Switch>
      <Route exact path={'/'} component={Home}/>  
      <Route  path={'/tech-info/:name'} component={TechInfo}/>
    </Switch>
    </>
  );
}

export default App;
