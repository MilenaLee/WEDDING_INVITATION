import React from "react";

import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from "styled-components";
import Moment from 'moment';
import "moment/locale/ko"; // Locale Setting


const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Comment = () => {
  const data = useStaticQuery(graphql`
  {
    allCommentsYaml {
      edges {
        node {
          id
          name
          date
          message
        }
      }
    }
  }
`)
  const fields = {'name': '', 'message': ''};
  const enabledSendButton = fields['name'].length > 0 && fields['message'].length > 0;
// https://www.oscaralsing.com/gatsby-comments-staticman/
  // https://github.com/young-do/seohye-s2-youngdo/blob/master/src/components/Cheerup.svelte

  Moment.locale('ko')
  return (
        <div className="message-container">
        <form method="POST" action="https://wedding-invitation-comment.herokuapp.com/v2/entry/MilenaLee/WEDDING_INVITATION/main/comments">
          <input name="options[redirect]" type="hidden" value="https://minseok-mihyun-wedding.netlify.app/"/>
          <textarea className="message-form-text" name="fields[message]" placeholder="축하글을 남겨주세요."/>
          <div className="message-form-subbox">
            <input className="message-form-input" type="text" name="fields[name]" placeholder="이름 입력"/>
            <input className="message-form-input" type="text" name="fields[email]" value="aa@naver.com" hidden/>
            <button className="message-form-button" type="submit">등록하기</button>
          </div>
        </form>
          <span className="message-item-text">댓글 등록 시 시간이 걸릴 수 있습니다. 😅</span>
        <ul className="message-list">
          {data.allCommentsYaml.edges.map((value, index) => (
              <li className="message-item" key={index}>
                <span className="message-item-name">{value.node.name}</span>
                <span className="message-item-date">{Moment(value.node.date).format('YYYY-MM-DD HH:mm')}</span>
                <br/>
                <p className="message-item-text">{value.node.message}</p>
              </li>
          ))}
        </ul>
        </div>
  );
};
export default Comment;
