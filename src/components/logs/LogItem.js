import React from 'react';
import Moment from 'react-moment';

const LogItem = ({log}) => {
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
      <a href="#" className="secondary-content"><i className="material-icons grey-text">delete</i></a>
    </div>
    </li>
    </>
  )
}

export default LogItem;