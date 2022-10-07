import React from 'react';
import { useSelector } from "react-redux";

const Logs = ({}) => {
  const logs = useSelector(state => state.log.logs);
  return (
    <div>
      <ul className={'collection-with-header'}>
        <li className="collection-header">
          <h4 className={'center'}>System Logs</h4>
          {logs.length < 1 && <p className={'text-center'}>No Logs Found!</p>}
        </li>
        {logs.map(log => (
          <li className={'collection-item'}>{log.message}</li>
        ))}
      </ul>
    </div>
  )
}

export default Logs;