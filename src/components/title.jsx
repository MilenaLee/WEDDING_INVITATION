import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import BackgroundVideo from "../assets/BackgroundVideo.mp4";
import GalleryPhoto0 from "../assets/IMG_4139.jpg";
import {Divider} from "antd";
import Flower from "../assets/flower2.png";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Layout = styled.div`
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const VideoBackground = styled.video`
  width: 100%;
`;

const WeddingInvitation = styled.p`
  font-size: 0.825rem;
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const Schedule = styled.p`
  font-size: 1.06rem;
  opacity: 0.65;
  margin-bottom: 24px;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
`;


const Title = () => {
  const { width, height } = useWindowSize()
  return (
    <Layout>
      <Confetti
          width={width*2}
          height={height*2}
          numberOfPieces={300}
          gravity={0.2}
          colors={['#FFCDD2', '#F8BBD0', '#D1C4E9']}
          recycle={false}
          style={{ position: 'fixed' }}
      />
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
      <Image src={GalleryPhoto0} />
    </Layout>
  );
};

export default Title;
