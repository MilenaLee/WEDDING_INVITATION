import React, { useEffect } from "react";
import { Divider, Button } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";
import {KAKAOTALK_API_TOKEN} from "../../config";

const Wrapper = styled.div`
  padding-top: 42px;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1.2rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 22px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 0.2rem;
`

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
"timestamp" : "1664373274732",
"key" : "2bv9q",
    "mapWidth" : "1000",
    "mapHeight" : "300"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();

    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(KAKAOTALK_API_TOKEN);
      }

      // const container = document.getElementById('map');
      // const options = {
      //   center: kakao.maps.LatLng(33.450701, 126.570667),
      //   level: 3
      // };
      //
      // const map = kakao.maps.Map(container, options);
    }
  };

  const createKakaoNavi = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(KAKAOTALK_API_TOKEN);
      }

      kakao.Navi.start({
        name: "더컨벤션 영등포",
        y: 37.52667926188189,
          x: 126.89874311093499,
          coordType: 'wgs84'
    });
    }
  }

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 20, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map
          id="daumRoughmapContainer1664373274732" className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <ButtonWrap>
          <a className="flex-1" href="tmap://search?name=더컨벤션영등포">
            <Button style={{width: '7rem'}}>티맵 네비</Button>
          </a>
        <Divider type="vertical" />
        <a className="flex-1" onClick={createKakaoNavi}>
          <Button style={{width: '7rem'}}>카카오 네비</Button>
        </a>

        <Divider type="vertical" />
        <a className="flex-1" href="nmap://search?query=%EB%8D%94%EC%BB%A8%EB%B2%A4%EC%85%98%20%EC%98%81%EB%93%B1%ED%8F%AC%EC%A0%90&appname=https://minseok-mihyun-wedding.netlify.app/">
          <Button style={{width: '7rem'}}>네이버 지도</Button>
        </a>
      </ButtonWrap>
      <Content>
        서울 영등포구 국회대로38길 2
        <br />
        더컨벤션 영등포 1층 그랜드볼룸
        <br />
        <br />
        <Title>/ 자가용 /</Title>
        <br />
        웨딩홀 지하 주차장 1, 2층
        <br />
        웨딩홀 맞은편 공영주차장 이용 가능
        <br />
        <br />
        <Title>/ 지하철 /</Title>
        <br />
        2, 5호선 영등포구청역 3번출구 도보 5분
        <br />
        (4번 출구는 공사로 인해 임시 폐쇄되었습니다.)
        <br />
        <br />
        <Title>/ 버스 /</Title>
        <br />
        영등포구청역, 영등포경찰서 하차 후 도보
        <br />
        70-3, 5620, 6631, 6637, 7612, 영등포02
      </Content>
    </Wrapper>
  );
};

export default Location;
