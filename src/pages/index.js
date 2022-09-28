import React, { useEffect } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Song from "../assets/song.mp3";

import AOS from "aos";
import "aos/dist/aos.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import GalleryTitle from "../components/galleryTitle";
import {WEDDING_DATE, WEDDING_LOCATION} from "../../config";

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  background: #ffffff;
  background-image: url(${GroovePaper});
  width: 100%;
`;

const AudioDiv = styled.div`
  position: fixed;
    bottom: 0;
  /* width: 100% */
  left: 0;
  margin-bottom: 10px;
  margin-left: 20px;
  font-size: 23px;
  z-index: 1;
`;

const IndexPage = () => {
  const [audioValue, setAudioValue] = React.useState({
    // Get audio file in a variable
    audio: null,
    // Set initial state of song
    isPlaying: false,
  });

  // Main function to handle both play and pause operations
  const playPause = () => {
    // Get state of song
    let isPlaying = audioValue.isPlaying;
    if (isPlaying) {
      // Pause the song if it is playing
      audioValue.audio.pause();
    } else {
      // Play the song if it is paused
      audioValue.audio.play();
    }

    // Change the state of song
    setAudioValue({ ...audioValue, isPlaying: !isPlaying });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    document.body.appendChild(script);

    if(typeof Audio != "undefined") {
      audioValue.audio = new Audio(Song)
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  const { width, height } = useWindowSize()
  return (
    <Wrapper>
<head>
  <title>미현&민석 결혼해요!</title>
      <meta property="og:title" content="미현&민석 결혼해요!">
        <meta property="og:description" content="2023년 2월 4일 토요일 오후 2시, 더컨벤션 영등포 1층 그랜드볼룸">
</head>
      <Confetti
          width={1000}
          height={1000}
          numberOfPieces={30}
          gravity={0.05}
          colors={['#FFCDD2', '#F8BBD0', '#D1C4E9']}
          recycle={true}
          style={{ position: 'fixed' }}
      />
     <AudioDiv onClick={playPause}>
          {audioValue.isPlaying ? "🎶" : "🔇"}
      </AudioDiv>
      <Title />
      <Greeting />
      <GalleryTitle />
      <Gallery />
      <Location />
      <Quote />
      <CongratulatoryMoney />
      <Share />
      <Footer
        style={{
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: "center",
        }}
      >
        Copyright © 2022 Shin Jooyoung
      </Footer>
    </Wrapper>
  );
};

export default IndexPage;
