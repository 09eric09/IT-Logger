import React from 'react'
import { useSelector } from 'react-redux';
import Container from '../UI/Container';

const TechInfo = () => {
  const tech = useSelector(state=> state.tech.techInfo);
  return (
    <Container>
      <h2>{tech.firstName} {tech.lastName}</h2>
      <p>Tech info goes here</p>
    </Container>
  )
}

export default TechInfo;