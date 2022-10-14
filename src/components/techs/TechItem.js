import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { techActions } from '../../store/tech-slice';

const TechItem = ({tech}) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(techActions.removeTech(tech.id))
    fetch(`/techs/${tech.id}`, {
      method: 'DELETE'
    });
  }
  return (
    <li className={'collection-item'}>
      <Link to={`/tech-info/${tech.firstName}-${tech.lastName}`} onClick={()=> dispatch(techActions.techInfo(tech))}>
        {tech.firstName} {tech.lastName}
        <button onClick={removeHandler} className="secondary-content"><i className="material-icons grey-text">delete</i></button>
      </Link>
    </li>
  )
}

export default TechItem;