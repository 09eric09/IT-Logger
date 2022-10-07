import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logActions } from '../../store';

const SearchBar = () => {
  const [log, setLog] = useState('');
  const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(logActions.addLog(log));
    }

  return (
    <nav className="blue" style={{marginBottom: '30px',}}>
    <div className="nav-wrapper">
      <form onSubmit={onSubmitHandler}>
        <div className="input-field">
          <input onChange={(e)=> setLog(e.target.value)} id="search" type="search"/>
          <label className="label-icon"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}

export default SearchBar;