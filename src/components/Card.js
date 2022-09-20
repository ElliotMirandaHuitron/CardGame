import React from 'react'
import classNames from 'classnames';
import 'animate.css';
import PropTypes from 'prop-types';



export const Card = ({card,isFiveHand,cardPos}) => {
  const isRed = card.shape==='♦' || card.shape==='♥';
  
  return (
    <div className={classNames("bg-white rounded-xl h-32 max-h-full w-24 max-w-full mb-3 relative lg:h-56 lg:w-44 animate__animated animate__flipInY",{
      'lg:rotate-[10deg] lg:bottom-10': isFiveHand===5 && cardPos===0,
      'lg:rotate-[5deg] lg:bottom-2': isFiveHand===5 && cardPos===1,
      'lg:rotate-[0deg] ': isFiveHand===5 && cardPos===2,
      'lg:rotate-[-5deg] lg:bottom-2': isFiveHand===5 && cardPos===3,
      'lg:rotate-[-10deg] lg:bottom-10': isFiveHand===5 && cardPos===4,
    })}>
      <div className="inline-block">
        
        <h3 className={classNames("ml-3 mt-2 text-2xl font-bold lg:text-7xl lg:ml-7",{'text-red-600': isRed })}>{card.number}</h3>
        <h3 className={classNames("ml-3 text-2xl lg:text-6xl lg:ml-7", {'text-red-600': isRed })}>{card.shape}</h3>
        <div className="text-right">
            <h3 className={classNames("ml-9 text-6xl leading-3 lg:text-[7rem] lg:ml-20 ",{'text-red-600': isRed})}>{card.shape}</h3>
        </div>
      </div>
    </div>
  )
};

Card.propTypes = {
  card: PropTypes.object,
  isFiveHand: PropTypes.number ,
  cardPos:PropTypes.number ,
};

Card.defaultProps = {
  
};


