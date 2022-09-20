import React from "react";
import PropTypes from 'prop-types';
import { Card } from "./Card";

export const Cards = ({ hand, isStarted, isWinner }) => {
  //console.log(hand.id);
  console.log(hand);
  const isFiveHand = hand.length; 
  return (
    <>
      {isWinner && (
        <>
          <h2
            className="
          bg-orange-400 
          relative 
          min-w-[60%] max-w-[65%] w-[100%]
          lg:min-w-[15%] lg:max-w-[40%]  
          p-2 
          mx-auto 
          text-white 
          text-center 
          font-neuton 
          text-4xl 
          font-extrabold
          before:absolute before:bottom-[-.6em] before:border-[1em] before:border-solid before:border-orange-400 before:z-[-2] outline outline-amber-700 outline-1
          after:absolute after:bottom-[-.6em] after:border-[1em] after:border-solid after:border-orange-400 after:z-[-2]
          before:left-[-2em] before:border-r-[2.9em] before:border-l-transparent z-[0]
          after:right-[-2em] after:border-l-[2.9em] after:border-r-transparent
          "
          >
            <strong
              className="
              before:z-[-1] before:content-[''] before:absolute before:block before:border-solid before:border-t-yellow-900 before:border-x-transparent before:border-b-transparent before:bottom-[-.6em] 
              after:z-[-1] after:content-[''] after:absolute after:block after:border-solid after:border-t-yellow-900 after:border-x-transparent after:border-b-transparent after:bottom-[-.6em] 

              before:left-1 before:border-t-[.6em] before:border-l-[1.8em] before:border-r-0 before:border-b-0
              after:right-1 after:border-t-[.6em] after:border-r-[1.8em] after:border-b-0 after:border-l-0
          "
            >
              Winner !
            </strong>
          </h2>
        </>
      )}
      <div className="block h-auto max-h-full w-full	max-w-full relative mt-32 lg:mt-36 lg:mb-0 ">
        {/*HIDE CARDS IF GAME HASN'T STARTED*/}
        {isStarted ? (
          <div className="h-auto max-h-full w-full	max-w-full flex flex-wrap justify-center gap-[8%] lg:gap-x-6">
            {hand.map((card, index) => (
              <Card card={card} key={card.id} cardPos={index} isFiveHand={isFiveHand} />
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {isWinner === false && (
        <div className="flex flex-col text-center relative mt-5 text-white font-neuton text-5xl font-medium">
          <p>
          You lose.
          <br /> Better luck next time!
          </p>
        </div>
      )}
    </>
  );
};

Cards.propTypes = {
  hand:PropTypes.array,
  isStarted:PropTypes.bool,
  isWinner:PropTypes.bool,
};