import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logActions } from '../../store';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(()=> {
    fetch(`/logs/?q=${search}`)
    .then(res => res.json())
    .then(data => dispatch(logActions.replaceLogs(data)));
  }, [search, dispatch]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <nav className="blue" style={{marginBottom: '30px',}}>
    <div className="nav-wrapper">
      <form onSubmit={onSubmitHandler}>
        <div className="input-field">
          <input onChange={(e)=> setSearch(e.target.value)} id="search" type="search" placeholder='Search Logs...'/>
          <label className="label-icon"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}

export default SearchBar;