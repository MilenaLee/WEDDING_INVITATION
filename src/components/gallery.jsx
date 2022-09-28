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
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
  {
    original: GalleryPhoto7,
    thumbnail: GalleryPhoto7,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
        autoPlay={true}
        slideInterval={6000}
        height="100%"
      />
    </Wrapper>
  );
};

export default Gallery;
