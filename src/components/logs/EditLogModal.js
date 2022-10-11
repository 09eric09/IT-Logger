import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logActions } from '../../store/log-slice';

const EditLogModal = () => {
    const currentLog = useSelector(state => state.log.currentLog);
    const techs = useSelector(state => state.tech.techs);
    const date = new Date().toISOString().split('T')[0];
    const dispatch = useDispatch();

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    // console.log(currentLog);

    useEffect(()=> {
        if (currentLog) {
            setMessage(currentLog.message);
            setAttention(currentLog.attention);
            setTech(currentLog.tech);
        }
      }, [currentLog]);

    const submitHandler = () => {
        let data = {
            id: currentLog.id,
            message: message,
            attention: attention, 
            tech: tech, 
            date: date,
        }

        fetch(`logs/${currentLog.id}`, {
            method: 'PUT', 
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        });

        dispatch(logActions.updateLog(data));
        setMessage('');
        setAttention('');
        setTech('');
    }

  return (
    <div id='edit-log-modal' className='modal'>
        <div className="modal-content">
            <h4>Enter System Log</h4>
            <div className="row">
                <div className="input-field">
                    <input onChange={(e)=> setMessage(e.target.value)} type="text" name="message" value={message}/>
                    <label className="active" htmlFor="message">Log Message</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <select className="browser-default" onChange={(e)=> setTech(e.target.value)} name="tech" value={tech}>
                        <option value="" disabled>Select a Technician</option>  
                        {techs.map(tech => (
                        <option value={`${tech.firstName} ${tech.lastName}`} key={tech.id}>{tech.firstName} {tech.lastName}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <p>
                    <label>
                    <input 
                    type="checkbox" 
                    className="" 
                    checked={attention} 
                    value={attention}
                    onChange={()=> setAttention(attention => !attention)}
                    />
                    <span>Needs Attention</span>
                    </label>
                    </p>
                </div>
            </div>
        </div>
        <div className="modal-footer">
            <a href="#" className="modal-close waves-effect waves-green blue btn" onClick={submitHandler}>Enter</a>
        </div>
    </div>
  )
}
export default EditLogModal;