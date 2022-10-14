import React from 'react'
import { useSelector } from 'react-redux';

const TechInfo = () => {
  const tech = useSelector(state=> state.tech.techInfo);
  return (
    <div>
      <h2>{tech.firstName} {tech.lastName}</h2>
    </div>
  )
}

export default TechInfo;