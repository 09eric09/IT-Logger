import React from 'react';
import Container from '../UI/Container';
import Modals from '../UI/Modals';
import AddBtn from '../UI/AddBtn';
import Logs from '../logs/Logs';

const Home = () => {
  return (
    <Container>
    <Modals/>
    <AddBtn/>
    <Logs/>
    </Container>
  )
}

export default Home;