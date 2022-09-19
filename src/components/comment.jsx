import React from "react";
import { Disqus } from 'gatsby-plugin-disqus';
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Comment = () => {
  const config = {
    url: 'https://minseok-mihyun-wedding.netlify.app/', // 페이지 주소
    identifier: 'https://minseok-mihyun-wedding.netlify.app/', // 페이지의 유니크한 값
    title: "민석&미현", // 페이지 제목
  };
  return (
      <Wrapper>
      <Disqus config={config} />
      </Wrapper>
  );
};
export default Comment;
