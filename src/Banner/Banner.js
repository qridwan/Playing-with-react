import React from "react";
import { Col, Row } from "react-bootstrap";
import Slide from 'react-reveal/Slide';

const Banner = ({ bannerInfo }) => {
  const { gender, location, picture, name } = bannerInfo;
  return (
    <Slide top>
    <Row className="justify-content-center ">
      <Col className="" xs={10} md={7}>
        <Row className="justify-content-center align-items-center box my-5">
          <Col md={2} className="mt-2">
            <img
              style={{ borderRadius: "50%" }}
              src={picture?.medium}
              alt=""
              className="img-fluid"
              height=""
            />
          </Col>
          <Col md={8} className="py-3">
            <h1
              syle={{ fontSize: "1.8em" }}
              className="text-decoration-underline orange-text"
            >
              {name?.title}. {name?.first} {name?.last}
            </h1>
            <p>
              <span style={{ color: "#a259ff", fontWeight: "bold" }}>
                {location?.street.number}
              </span>
              , {location?.street.name},{location?.city},{" "}
              <b>{location?.country}</b>,{location?.postcode} <br />
              {location?.timezone.offset}, {location?.timezone.description}{" "}
              <br />
              <span style={{ color: "grey" }}>
                {gender?.charAt(0).toUpperCase() + gender?.slice(1)}
              </span>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
    </Slide>
  );
};

export default Banner;
