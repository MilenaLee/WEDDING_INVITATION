import React, { useState } from "react";
import { Button, Divider, message, Modal, Collapse } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import Flower from "../assets/flower3.png";
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
} from "../../config";
import Comment from "./comment";

const { Panel } = Collapse;

const Wrapper = styled.div`
  padding-bottom: 18px;
  width: 70%;
  margin: 0 auto;
  margin-top: 52px;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.2rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;
  color: var(--title-color);
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const CongratulatoryMoney = () => {
  return (
    <Wrapper>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>마음 전하실 곳</Title>
      </Divider>
      <Content data-aos="fade-up">
<Image src={Flower} />
        참석이 어려우신 분들을 위해
        <br />
        계좌번호를 기재하였습니다.
        <br />
        너그러운 마음으로 양해 부탁드립니다.
      </Content>
      <Content data-aos="fade-up">
      <Collapse style={{color: 'var(--title-color)'}}>
        <Panel header="신랑측 계좌번호" key="1" style={{color: '#5f5859! important'}} >
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>모 : {GROOM_MOTHER_NAME}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={GROOM_MOTHER_ACCOUNT_NUMBER}>
              <Button
                  type="text"
                  style={{ padding: 0, margin: 0 }}
                  onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {GROOM_MOTHER_ACCOUNT_NUMBER}
              </Button>
            </CopyToClipboard>
          </div>
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>신랑 {GROOM_NAME}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
              <Button
                  type="text"
                  style={{ padding: 0, margin: 0 }}
                  onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {GROOM_ACCOUNT_NUMBER}
              </Button>
            </CopyToClipboard>
          </div>
          <Description>
            계좌번호 클릭시 복사됩니다.
          </Description>
        </Panel>
        <Panel header="신부측 계좌번호" key="2">
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>부 : {BRIDE_FATHER_NAME}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={BRIDE_FATHER_ACCOUNT_NUMBER}>
              <Button
                  type="text"
                  style={{ padding: 0, margin: 0 }}
                  onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {BRIDE_FATHER_ACCOUNT_NUMBER}
              </Button>
            </CopyToClipboard>
          </div>
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>모 : {BRIDE_MOTHER_NAME}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={BRIDE_MOTHER_ACCOUNT_NUMBER}>
              <Button
                  type="text"
                  style={{ padding: 0, margin: 0 }}
                  onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {BRIDE_MOTHER_ACCOUNT_NUMBER}
              </Button>
            </CopyToClipboard>
          </div>
          <div style={{ marginTop: 24, marginBottom: 24 }}>
            <b>신부 {BRIDE_NAME}</b>
            <Divider type="vertical" />
            <CopyToClipboard text={BRIDE_ACCOUNT_NUMBER}>
              <Button
                  type="text"
                  style={{ padding: 0, margin: 0 }}
                  onClick={() => message.success("계좌번호가 복사되었습니다.")}
              >
                {BRIDE_ACCOUNT_NUMBER}
              </Button>
            </CopyToClipboard>
          </div>
          <Description>
            계좌번호 클릭시 복사됩니다.
          </Description>
        </Panel>
      </Collapse>
      </Content>
      <Content data-aos="fade-up">
        <Image src={Flower} style={{marginTop: '50px', marginBottom: '10px'}} />
        <Comment />
      </Content>
    </Wrapper>
  );
};

export default CongratulatoryMoney;
