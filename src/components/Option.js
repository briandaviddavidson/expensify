import React from 'react';

const Option = (props) => (
  <div>
      <p>{props.count}. {props.option}</p>
      <button className='button button--link' onClick={(e) => {
          props.handleDeleteSingleOption(props.option);
      }}>
        Remove
      </button>
  </div>
);

export default Option;
