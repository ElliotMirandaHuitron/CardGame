import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'animate.css';

const ResetButton = React.memo(({isStarted,isWinner,onResetDeck}) => {

  return (
    <div className={classNames("h-auto max-h-full w-full max-w-full flex justify-center relative mt-10 lg:flex lg:justify-end ",{
      "lg:justify-center": isWinner !== "",
    })}>    
        { isStarted ? (
        <button 
        className={classNames("lg:mr-10 rounded-xl border-4 text-yellow-300 border-yellow-300 px-8 py-2 my-3 text-2xl font-alfa animate__animated animate__zoomIn",{
          "lg:mr-0": isWinner!=="",
        })}
        onClick={ onResetDeck }>
            {isWinner ==="" ? 'Reset' : 'Play Again'}
        </button>
        ) : (<div></div>)}

    </div>
  )
});

ResetButton.displayName="ResetButton";


ResetButton.propTypes = {
  isStarted:PropTypes.bool,
  isWinner:PropTypes.bool,
  onResetDeck:PropTypes.func
};

ResetButton.defaultProps = {
  
};

export {ResetButton};