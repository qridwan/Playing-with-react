import React from "react";
import { Col } from "react-bootstrap";

const SingleCard = ({ info, handleBanner }) => {
  const { gender, nat, name, email } = info;
 
  return (
    <Col onClick={()=>handleBanner(info)} className="" xs={6} md={5} lg={3}>
      <div className="bg-light mx-1 my-2 p-2 box">
      <p className="">{gender.charAt(0).toUpperCase()+ gender.slice(1)} . {nat}</p>
      <h5>{name.title} {name.first} {name.last}</h5>
      <p>{email}</p>
      </div>
    </Col>
  );
};

export default SingleCard;
