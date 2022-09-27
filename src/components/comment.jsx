import React, {useEffect} from "react";

import { useStaticQuery, graphql } from 'gatsby'
import Moment from 'moment';
import "moment/locale/ko";
import {
  FIREBASE_API_KEY, FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET
} from "../../config"; // Locale Setting

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, addDoc, collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbService = getFirestore(app);

const Comment = () => {
  const [formValue, setformValue] = React.useState({
    name: '',
    message: ''
  });
  const [disabled, setDisabled] = React.useState(false);
  const [messageArray, setMessageArray] = React.useState([]);

  const handleSubmit = async (event) => {
    setDisabled(true);
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(dbService, "comment"), {
        name: formValue.name,
        message: formValue.message,
        date: Date.now()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error)
      alert("문제가 발생했습니다. 신랑/신부에게 문의 바랍니다!")
    }
    formValue.name = '';
    formValue.message = '';

    setDisabled(false);
    window.location.reload(false);
  }

  const handleChange = (event) => {
    console.log(event);
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
    console.log(formValue);
  }

  useEffect(async () => {
     // dbService = firebase.firestore();

    const commentCol = collection(dbService, 'comment');
    const commentSnapshot = await getDocs(commentCol);
    const docs = commentSnapshot.docs.map(doc => doc.data());
    docs.sort((a, b) => {
      return b.date - a.date;
    })
    setMessageArray(docs);
    console.log(messageArray);
  }, []);

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
        <ul className="message-list">
          {messageArray.map((value, index) => (
              <li className="message-item" key={index}>
                <span className="message-item-name">{value.name}</span>
                <span className="message-item-date">{Moment(value.date).format('YYYY-MM-DD HH:mm')}</span>
                <br/>
                <p className="message-item-text">{value.message}</p>
              </li>
          ))}
        </ul>
        </div>
  );
};
export default Comment;
