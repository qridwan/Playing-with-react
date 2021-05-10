import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from "../App";
import SingleCard from "./SingleCard";
import Fade from "react-reveal/Fade";

const Cards = ({ handleBanner }) => {
  const [infos] = useContext(UserContext);
  return (
    <Container>
      <Fade bottom cascade>
        <Row className="justify-content-center">
          {infos.map((info, index) => (
            <SingleCard key={index} info={info} handleBanner={handleBanner} />
          ))}
        </Row>
      </Fade>
    </Container>
  );
};

export default Cards;
