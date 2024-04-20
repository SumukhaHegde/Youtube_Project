import React, { useEffect, useState } from "react";
import LeftPane from "../../components/BodyContainer/LeftPaneContainer/LeftPane";
import "./_body.scss";
import VideoContainer from "../../components/BodyContainer/VideoContainer/VideoContainer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import CatagoriesBar from "../../components/CategoriesBar/CatagoriesBar";

const Body = () => {
  return (
    <div className="body-container" style={{ height: "100%" }}>
      <Container>
        <CatagoriesBar />
        <Row>
          {[...new Array(20)].map(() => (
            <Col lg={3} md={4}>
              <VideoContainer />
            </Col>
          ))}
        </Row>
      </Container>
      ;
    </div>
  );
};

export default Body;
