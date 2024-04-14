/* eslint-disable react/prop-types */
import './Input.css';
import {useState} from 'react';

export const Input = ({getCards, onInput}) => {
  const [text, setText] = useState('');
  const onChangeHandler = async (str) => {
    getCards(str)
      .then((res) => onInput(res))
      .catch(onInput([]));
  };

  return (
    <div className='input-wrapper'>
      <input
        className='input'
        onChange={(e) => setText(e.target.value)}
        placeholder='Search for a card...'
      />
      <button
        className='input-button'
        onClick={() => onChangeHandler(text)}
      ></button>
    </div>
  );
};
