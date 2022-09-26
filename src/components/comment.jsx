import React from "react";

import { useStaticQuery, graphql } from 'gatsby'
import Moment from 'moment';
import "moment/locale/ko";
import axios from "axios";
import {WEDDING_INVITATION_URL} from "../../config"; // Locale Setting


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

// https://www.oscaralsing.com/gatsby-comments-staticman/
  // https://github.com/young-do/seohye-s2-youngdo/blob/master/src/components/Cheerup.svelte

  const [formValue, setformValue] = React.useState({
    name: '',
    message: '',
    email: 'aa@naver.com'
  });
  const [disabled, setDisabled] = React.useState(false);

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();
    // store the states in the form data
    const messageFormData = new URLSearchParams();
    messageFormData.append("fields[name]", formValue.name)
    messageFormData.append("fields[message]", formValue.message)
    messageFormData.append("fields[email]", formValue.email)

    try {
      // make axios post request
      const response = await axios.post(
        "https://wedding-invitation-comment.herokuapp.com/v2/entry/MilenaLee/WEDDING_INVITATION/main/comments",
        messageFormData)
      .then( res => {
        console.log(res);
        if (alert('댓글 등록이 완료되었습니다. 댓글 반영까지 조금만 기다려주세요~') == undefined) {
          window.location.href = WEDDING_INVITATION_URL;
        }
      }).catch(error => {
        console.log(error);
        alert('문제가 발생했습니다. 신랑/신부에게 문의 부탁드립니다!');
      });
      console.log(response);
    } catch (error) {
      console.log(error)
    }

    setDisabled(false);
  }

  const handleChange = (event) => {
    console.log(event);
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
    console.log(formValue);
  }

  Moment.locale('ko')
  return (
        <div className="message-container">
        <form onSubmit={handleSubmit}>
          <textarea className="message-form-text" name="message"
                    value={formValue.message}
                    onChange={handleChange} placeholder="축하글을 남겨주세요."/>
          <div className="message-form-subbox">
            <input className="message-form-input" type="text"
                   name="name"
                   value={formValue.name}
                   onChange={handleChange} placeholder="이름 입력"/>
            <input className="message-form-input" type="text"
                   name="email" value={formValue.email}
                   onChange={handleChange} hidden/>
            <button className="message-form-button" type="submit" disabled={disabled}>등록하기</button>
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
