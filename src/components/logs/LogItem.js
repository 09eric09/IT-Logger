import React from 'react';

const LogItem = ({log}) => {
  return (
    <>
    <li className={'collection-item'}>
    <div>
      <a className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} href="#edit-log-modal">{log.message}</a>
    </div>
    </li>
    </>
  )
}

export default LogItem;