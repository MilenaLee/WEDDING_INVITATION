import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/1.jpeg";
import GalleryPhoto2 from "../assets/2.jpeg";
import GalleryPhoto3 from "../assets/3.jpeg";
import GalleryPhoto4 from "../assets/4.jpeg";
import GalleryPhoto5 from "../assets/5.jpeg";
import GalleryPhoto6 from "../assets/6.jpeg";
import GalleryPhoto7 from "../assets/7.jpeg";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1.2rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;


const GalleryTitle = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 10 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
    </Wrapper>
  );
};

export default GalleryTitle;
