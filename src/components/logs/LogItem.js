import React from 'react';
import { useDispatch } from 'react-redux';
import { logActions } from '../../store';
import Moment from 'react-moment';

const LogItem = ({log}) => {
  const dispatch = useDispatch();
  return (
    <>
    <li className={'collection-item'}>
    <div>
      <a className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} href="#edit-log-modal">{log.message}</a>
      <br />
      <span className="grey-text">
      <span className='black-text bold'>ID #{log.id}</span> last updated by 
      <span className='black-text bold'> {log.tech}</span> on {''}
      <span className='black-text'><Moment format={'MM/DD/YY'}>{log.date}</Moment></span>
      </span>
      <a onClick={()=> dispatch(logActions.removeLog(log.id))} href="#" className="secondary-content"><i className="material-icons grey-text">delete</i></a>
    </div>
    </li>
    </>
  )
}

export default LogItem;