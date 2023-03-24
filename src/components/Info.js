import React from 'react';
import './Info.css';

const Info = ({ history }) => {
  const list = history.map((v, i) => {
    return (
      <li key={i}>
        <p>
          {i + 1}번째 시도 : {v.answer} / {v.result}{' '}
        </p>
      </li>
    );
  });

  return <ol>{list}</ol>;
};

export default Info;
