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
import GalleryPhoto7_1 from "../assets/7_1.jpg";
import GalleryPhoto7 from "../assets/7.jpeg";

import GalleryPhoto8_1 from "../assets/8_1.jpg";
import GalleryPhoto8_2 from "../assets/8_2.jpg";
import GalleryPhoto8_3 from "../assets/8_3.jpg";
import GalleryPhoto8_4 from "../assets/8_4.jpg";
import GalleryPhoto8_5 from "../assets/8_5.jpg";
import GalleryPhoto8_6 from "../assets/8_6.png";
import GalleryPhoto8_7 from "../assets/8_7.jpg";
import GalleryPhoto8_8 from "../assets/8_8.png";
import GalleryPhoto8_9 from "../assets/8_9.jpg";
import GalleryPhoto8_10 from "../assets/8_10.jpg";
import GalleryPhoto8 from "../assets/8.jpg";
import GalleryPhoto9 from "../assets/9.jpg";
import GalleryPhoto10 from "../assets/10.jpg";
import GalleryPhoto11 from "../assets/11.jpg";
import GalleryPhoto12 from "../assets/12.jpg";
import GalleryPhoto13 from "../assets/13.jpg";
import GalleryPhoto14 from "../assets/14.jpg";
import GalleryPhoto15 from "../assets/15.jpg";
import GalleryPhoto16 from "../assets/16.jpg";


const Wrapper = styled.div` 
`;

const images = [
  { original: GalleryPhoto1,    thumbnail: GalleryPhoto1  },
  { original: GalleryPhoto2,    thumbnail: GalleryPhoto2,  },
  { original: GalleryPhoto3,    thumbnail: GalleryPhoto3,  },
  { original: GalleryPhoto4,    thumbnail: GalleryPhoto4,  },
  { original: GalleryPhoto5,    thumbnail: GalleryPhoto5,  },
  { original: GalleryPhoto6,    thumbnail: GalleryPhoto6,  },
  { original: GalleryPhoto7_1, thumbnail: GalleryPhoto7_1},
  { original: GalleryPhoto7,    thumbnail: GalleryPhoto7,  },
  { original: GalleryPhoto8_1, thumbnail: GalleryPhoto8_1},
  { original: GalleryPhoto8_2, thumbnail: GalleryPhoto8_2},
  { original: GalleryPhoto8_3, thumbnail: GalleryPhoto8_3},
  { original: GalleryPhoto8_4, thumbnail: GalleryPhoto8_4},
  { original: GalleryPhoto8_5, thumbnail: GalleryPhoto8_5},
  { original: GalleryPhoto8_6, thumbnail: GalleryPhoto8_6},
  { original: GalleryPhoto8_7, thumbnail: GalleryPhoto8_7},
  { original: GalleryPhoto8_8, thumbnail: GalleryPhoto8_8},
  { original: GalleryPhoto8_9, thumbnail: GalleryPhoto8_9},
  { original: GalleryPhoto8_10, thumbnail: GalleryPhoto8_10},
  { original: GalleryPhoto8,    thumbnail: GalleryPhoto8,  },
  { original: GalleryPhoto9,    thumbnail: GalleryPhoto9,  },
  { original: GalleryPhoto10,    thumbnail: GalleryPhoto10,  },
  { original: GalleryPhoto11,    thumbnail: GalleryPhoto11,  },
  { original: GalleryPhoto12,    thumbnail: GalleryPhoto12,  },
  { original: GalleryPhoto13,    thumbnail: GalleryPhoto13,  },
  { original: GalleryPhoto14,    thumbnail: GalleryPhoto14,  },
  { original: GalleryPhoto15,    thumbnail: GalleryPhoto15,  },
  { original: GalleryPhoto16,    thumbnail: GalleryPhoto16,  },
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
