import React from "react";
import "./_body.scss";
import VideoContainer from "../../components/BodyContainer/VideoContainer/VideoContainer";
import Header from "../../components/Header/Header";
import LeftPane from "../../components/BodyContainer/LeftPaneContainer/LeftPane";
import { Outlet, RouterProvider } from "react-router-dom";
import { Container } from "react-bootstrap";

const Body = () => {
  return (
    <>
      <Header />
      <div className="app-root-container">
        <LeftPane />
        <Container fluid className="app-container">
          <div className="body-container">
            <Outlet />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Body;
