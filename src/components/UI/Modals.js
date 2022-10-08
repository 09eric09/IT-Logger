import React from 'react';
import AddLogModal from '../logs/AddLogModal';
import EditLogModal from '../logs/EditLogModal';
import AddTechModal from '../techs/AddTechModal';
import TechListModal from '../techs/TechListModal';

const Modals = () => {
  return (
    <>
    <AddLogModal/>
    <EditLogModal/>
    <AddTechModal/>
    <TechListModal/>
    </>
  )
}

export default Modals;