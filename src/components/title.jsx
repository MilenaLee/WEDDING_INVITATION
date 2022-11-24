import React from "react";
import styled from "styled-components";
import {
  WEDDING_DATE,
  WEDDING_LOCATION,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config.js";
import GalleryPhoto0 from "../assets/IMG_4139.jpg";

import GalleryPhoto2 from "../assets/2.jpeg";
import GalleryPhoto3 from "../assets/3.jpeg";
import GalleryPhoto7_1 from "../assets/7_1.jpg";
import GalleryPhoto8_2 from "../assets/8_2.jpg";
import GalleryPhoto8_3 from "../assets/8_3.jpg";
import GalleryPhoto8_4 from "../assets/8_4.jpg";

import GalleryPhoto8_6 from "../assets/8_6.png";
import GalleryPhoto8_7 from "../assets/8_7.jpg";
import GalleryPhoto8_9 from "../assets/8_9.jpg";
import GalleryPhoto8_10 from "../assets/8_10.jpg";
import GalleryPhoto8 from "../assets/8.jpg";
import GalleryPhoto10 from "../assets/10.jpg";
import GalleryPhoto11 from "../assets/11.jpg";
import GalleryPhoto15 from "../assets/15.jpg";
import {KAKAOTALK_SHARE_IMAGE} from "../../config";


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
  const photo = [GalleryPhoto0, GalleryPhoto2, GalleryPhoto3, GalleryPhoto7_1, GalleryPhoto8_2, GalleryPhoto8_3, GalleryPhoto8_4, GalleryPhoto8_6, GalleryPhoto8_7, GalleryPhoto8_9, GalleryPhoto8_10, GalleryPhoto8, GalleryPhoto10, GalleryPhoto11, GalleryPhoto15];
  const randomValue = photo[Math.floor(Math.random() * photo.length)];

  return (
    <Layout>
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
      <Image src={randomValue} />
    </Layout>
  );
};

export default Title;
