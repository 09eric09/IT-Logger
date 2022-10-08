import React from 'react';
import TechItem from './TechItem';
import { useSelector } from 'react-redux';

const TechListModal = () => {
  const techs = useSelector(state => state.tech.techs);
  return (
    <div id='tech-list-modal' className="modal">
      <div className="modal-content">
      <ul className={'collection with-header'}>
        <li className="collection-header">
          <h4 className={'center'}>Technicians</h4>
          {techs.length < 1 && <p className={'text-center'}>No Techs Found!</p>}
        </li>
        {techs.map(tech => (
          <TechItem tech={tech} key={tech.id}/>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default TechListModal;