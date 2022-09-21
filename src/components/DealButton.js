import React from 'react'
import PropTypes from 'prop-types';

const DealButton = React.memo(({onGetHand,isStarted,isWinner}) => {


  return (

    <div className="h-auto max-h-full w-auto max-w-full flex justify-center relative mt-10">
    {isWinner ==="" ?
    (
      <button className="rounded-xl transition duration-150 ease-in-out bg-yellow-300 px-14 py-5 my-3 text-4xl font-alfa" onClick={ onGetHand }>
      {isStarted ? 'DEAL' : 'Start Game'}
      </button>
    ):(<div></div>)
    }
    </div>
  )
});

DealButton.displayName="DealButton"

DealButton.propTypes = {
  onGetHand: PropTypes.func ,
  isStarted: PropTypes.bool ,
};

DealButton.defaultProps = {
  
};

export { DealButton }