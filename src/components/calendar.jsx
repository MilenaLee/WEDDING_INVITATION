import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

const Calendar = () => {
  const getDDay = () => {
    // D-Day 날짜 지정
    const setDate = new Date("2023-02-04T14:00:00+0900");
    // D-day 날짜의 연,월,일 구하기
    const setDateYear = setDate.getFullYear();
    // getMonth 메서드는 0부터 세기 때문에 +1 해준다.
    const setDateMonth = setDate.getMonth() + 1;
    const setDateDay = setDate.getDate();

    // 현재 날짜를 new 연산자를 사용해서 Date 객체를 생성
    const now = new Date();

    // D-Day 날짜에서 현재 날짜의 차이를 getTime 메서드를 사용해서 밀리초의 값으로 가져온다.
    const distance = setDate.getTime() - now.getTime();

    // Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
    // 밀리초 값이기 때문에 1000을 곱한다.
    // 1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
    // 나머지 연산자(%)를 이용해서 시/분/초를 구한다.
    const day = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    const seconds = Math.floor((distance % (1000*60))/1000);

    // D-Day 날짜를 가져오고,
    // 삼항 연산자를 사용해서 값이 10보다 작을 경우에 대해 조건부 렌더링을 해준다.
    return day + '일 '; // + hours + '시간 ' + minutes + '분 ';
  }

  return (
      <Wrapper>
      <div
          className="wow fadeInUp section5 inner cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <br/>
        <p className="section5-title section5-sub" style={{marginTop: `0`}}>
          2023년 2월 4일 · 토요일 · 오후 2:00</p>
        <table className="wow fadeInUp section5-title section5-table center">
          <tr>
            <td className="sun">S</td>
            <td>M</td>
            <td>T</td>
            <td>W</td>
            <td>T</td>
            <td>F</td>
            <td>S</td>
          </tr>
          <tr>
            <td className="sun previous-month">22</td>
            <td className="previous-month">23</td>
            <td className="previous-month">24</td>
            <td className="previous-month">25</td>
            <td className="previous-month">26</td>
            <td className="previous-month">27</td>
            <td className="previous-month">28</td>
          </tr>
          <tr>
            <td className="sun previous-month">29</td>
            <td className="previous-month">30</td>
            <td className="previous-month">31</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td className="check">4</td>
          </tr>
          <tr>
            <td className="sun">5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
          </tr>
          <tr>
            <td className="sun">12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
          </tr>
          <tr>
            <td className="sun">19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
          </tr>
        </table>
        <p className="wow fadeInUp section5-title section5-sub"
           style={{ marginTop:`1.3em`}}>미현 ❤️ 민석 결혼식이
          <br/><span id="d-day">{getDDay()}</span> 남았습니다.</p>
        <br/><br/>
      </div>
      </Wrapper>
  )
}

export default Calendar;

// https://myungwoonkim.github.io/