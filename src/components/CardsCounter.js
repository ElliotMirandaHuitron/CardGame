import React, { useEffect } from 'react'
import PropTypes from 'prop-types';

export const CardsCounter = ({deck,onWinning,onLosing}) => {


  const aces = deck.filter(as => as.number === 'A' );
  useEffect(() => {
    //[Array] of aces remaining 
    if(aces.length === 0 && deck.length !== 0){
      onLosing(false);
      //console.log('LOSER');
    } else if (aces.length === 0 && deck.length === 0){
      onWinning(true);
      //console.log('WINNER');
    }
  },[aces.length, deck.length, onLosing, onWinning])
  


  return (
    <div className="bg-black h-[120px] w-[200px] max-w-full mx-auto relative top-[5%] border-2 border-yellow-300">
      <div className="flex justify-center ">
        <div className="text-center">
          <h2 className="text-white font-neuton text-4xl font-extrabold ">{deck.length}</h2>
          <h2 className="text-white font-neuton text-3xl font-semibold">Cards Left</h2>
        </div>
        <div className="text-center">
          <h2 className="text-white font-neuton text-4xl font-extrabold ">{aces.length}</h2>
          <h2 className="text-white font-neuton text-3xl font-semibold">Aces Left</h2>
        </div>
      </div>
    </div>
  )
};

CardsCounter.propTypes = {
  
  deck: PropTypes.array,
  onWinning: PropTypes.func,
  onLosing: PropTypes.func,
  /**
   * Is this the principal call to action on the page?
   */
  //primary: 'primary',//PropTypes.oneOf(['primary', 'secondary', 'terciary']),
  /**
   * What background color to use
   */
  //backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  //size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  //label: PropTypes.string.isRequired
  /**
   * Optional click handler
   */
  //onClick: PropTypes.func,
};

CardsCounter.defaultProps = {
  //backgroundColor: null,
  //primary: 'primary'/*false*/
  //size: 'medium',
  //onClick: undefined,
};
