import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./_watchScreen.scss";
import VideoMetaData from "../WatchScreenVideoDetails/VideoMetaData";
import VideoSuggestionsList from "../VideoSuggestionsList/VideoSuggestionsList";
import CommentsSection from "../Comments/CommentsSection";
import { useParams } from "react-router-dom";
import { getVideoDetailsByVideoId } from "../../Constants/API/Api";
import { useSelector } from "react-redux";

//watch screen page
const WatchScreen = () => {
  const params = useParams();
  const videoId = params.key;
  const [videoDetails, setVideoDetails] = useState(null);
  const videos = useSelector(
    (store) => store.containerVideos.videosList.videos
  );

  const getVideoDetailsById = async () => {
    const { data } = await getVideoDetailsByVideoId(videoId);
    const details = data.items[0];
    console.log(details);
    setVideoDetails(details);
  };

  useEffect(() => {
    getVideoDetailsById();
  }, [videoId]);
  return (
    <Row style={{ marginTop: "1rem" }}>
      <Col lg={9}>
        <div className="watch-screen">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
            title="This is Sample"
            width="100%"
            height="100%"
          ></iframe>
          {videoDetails && (
            <VideoMetaData videoDetails={videoDetails} videoId={videoId} />
          )}
          <CommentsSection videoId={videoId} />
        </div>
      </Col>
      <Col lg={3}>
        {videos.map((video, index) => (
          <VideoSuggestionsList key={index} videoDetails={video} />
        ))}{" "}
      </Col>
    </Row>
  );
};

export default WatchScreen;
