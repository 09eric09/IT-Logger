import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logActions } from '../../store';

const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');
    const techs = useSelector(state => state.tech.techs);
    const date = new Date().toISOString().split('T')[0];
    const dispatch = useDispatch();

    const submitHandler = () => {
        let data = {
            message: message,
            attention: attention, 
            tech: tech,
            date: date,
        }

        dispatch(logActions.addLog(data));
        fetch(`/logs`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        setMessage('');
        setAttention('');
        setTech('');
    }

  return (
    <div id='add-log-modal' className='modal'>
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
                    <option value={tech.firstName} key={tech.id}>{tech.firstName} {tech.lastName}</option>
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

export default AddLogModal;