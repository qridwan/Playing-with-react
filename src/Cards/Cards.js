import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { UserContext } from '../App';
import SingleCard from './SingleCard';

const Cards = ({handleBanner}) => {
    const [infos, setInfos] = useContext(UserContext);
    console.log("🚀 ~ file: Cards.js ~ line 6 ~ Cards ~ infos", infos)
    return (
        <Container>
  <Row>
  {
      infos.map((info, index) => <SingleCard key={index} info={info} handleBanner={handleBanner}/>)
  }
  </Row>
</Container>
    );
};

export default Cards;