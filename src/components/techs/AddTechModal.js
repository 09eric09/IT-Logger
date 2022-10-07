import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const submitHandler = () => {
        setFirstName('');
        setLastName('');
    }

  return (
    <div id='tech-modal' className='modal'>
        <div className="modal-content">
            <h4>New Technician</h4>
            <div className="row">
                <div className="input-field">
                    <input onChange={(e)=> setFirstName(e.target.value)} type="text" name="firstName" value={firstName}/>
                    <label className="active" htmlFor="message">First Name</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <input onChange={(e)=> setLastName(e.target.value)} type="text" name="LastName" value={lastName}/>
                    <label className="active" htmlFor="message">Last Name</label>
                </div>
            </div>
        </div>
        <div className="modal-footer">
            <a href="#" className="modal-close waves-effect waves-green blue btn" onClick={submitHandler}>Enter</a>
        </div>
    </div>
  )
}

export default AddTechModal;