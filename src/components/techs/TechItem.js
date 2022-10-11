import React from 'react';
import { useDispatch } from 'react-redux';
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
      <div>
        {tech.firstName} {tech.lastName}
        <a onClick={removeHandler} href="#" className="secondary-content"><i className="material-icons grey-text">delete</i></a>
      </div>
    </li>
  )
}

export default TechItem;