import { faPaperPlane, faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import './Board.css';

const Board = ({ answer, changeAnswer, addList }) => {
  const [trialCount, setTtrialCount] = useState(5);
  const [correct, setCorrect] = useState(false);
  const correctNum = useRef(Math.floor(Math.random() * 100) + 1);
  let anounce;
  if (correct) {
    anounce = '정답입니다!!!!축하합니다~~~~';
  } else if (trialCount <= 0) {
    anounce = `아쉽습니다. 정답은 ${correctNum.current}입니다`;
  } else if (answer === 'NaN') {
    anounce = '1 ~ 100 사이의 숫자만 입력해주세요';
  } else {
    anounce = `남은 횟수는 ${trialCount}회 입니다.`;
  }

  const enterClick = (event) => {
    if (event.key === 'Enter') {
      let answer = event.target.value;
      if (!isNaN(answer) && 0 < answer && answer <= 100) {
        answer = parseInt(answer);
        changeAnswer(answer);
        setTtrialCount((prev) => prev - 1);
        if (correctNum.current === answer) {
          addList({ answer: answer, result: 'correct' });
          setCorrect(true);
        } else if (correctNum.current > answer) {
          addList({ answer: answer, result: 'UP' });
        } else {
          addList({ answer: answer, result: 'DOWN' });
        }
      } else {
        changeAnswer('NaN');
      }
      event.target.value = '';
    }
  };

  return (
    <div className='board-wrapper'>
      <div className='search-bar'>
        <input type='text' placeholder='숫자입력' onKeyDown={enterClick} disabled={trialCount <= 0 || correct} />
      </div>
      <p className='result'>{anounce}</p>
    </div>
  );
};

export default Board;
