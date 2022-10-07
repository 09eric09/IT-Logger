import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const EditLogModal = () => {
    const logs = useSelector(state => state.log.logs);
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const submitHandler = () => {
        let data = {
            message: message,
            attention: attention, 
            tech: tech
        }

        console.log(data);
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
                        <option value="Jon Doe">Jon Doe</option>
                        <option value="Jane Doe"></option>
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