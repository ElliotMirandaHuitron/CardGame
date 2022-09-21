import React, { useCallback, useEffect, useState } from "react";
import { generateId } from "./helpers/generateId";
import Confetti from "react-dom-confetti";
import { CardsCounter } from "./components/CardsCounter";
import { Cards } from "./components/Cards";
import { DealButton } from "./components/DealButton";
import { ResetButton } from "./components/ResetButton";
import { deck as rawDeck } from "./helpers/deck";
import { useShuffle } from "./hooks/useShuffle";

const confettiParams = {
  angle: 90,
  spread: "131",
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: "9",
  width: "10px",
  height: "26px",
  perspective: "589px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

export const App = () => {
  //Deck Inicial
  const [deck,setShuffledDeck] = useShuffle(rawDeck);//Custom Hook
  //const [deck, setDeck] = useState(rawDeck);//WO Custom Hook
  //Hand
  const [hand, setHand] = useState([]);
  //Game Started
  const [isStarted, setIsStarted] = useState(false);
  //Is Winner?
  //Para no manejar otro estado isLoser, puse string vacío como estado inicial, de poner false, iba a ser perdedor hasta ganar, aunque esta forma da conflicto con Props
  const [isWinner, setIsWinner] = useState("");


  // Optimized version
  const handHandler = useCallback(() => {
    setHand(deck.slice(-5).map((deck) => ({...deck,id:generateId()}) ));
    setShuffledDeck( previousDeck => {
      return previousDeck.slice(0, previousDeck.length - 5);
    });
    setIsStarted(true); //game Started
  }, [deck, setShuffledDeck]);


  const resetDeckHandler = useCallback(() =>{
    setIsStarted(false);//Yet to start game again
    setIsWinner('');//no winner or loser
    //onShuffle(rawDeck);//shuffle deck
    setShuffledDeck(rawDeck);// Shuffle Deck Custom Hook
  }, [setShuffledDeck]);

  const loseHandler = useCallback(() => {
    setIsWinner(false);
  }, []);

  const winHandler = useCallback(() => {
    setIsWinner(true);
  }, []);
  
  useEffect(() => {
    //onShuffle(rawDeck);
    setShuffledDeck(rawDeck);// Shuffle Deck Custom Hook
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //lg(1024px) is only breakpoint
  return (
    <div className="bg-gradient-to-b from-green-700 to-green-900 h-[896px] w-[414px] mx-auto lg:w-full lg:min-h-screen">
      <CardsCounter deck={ deck } onLosing={ loseHandler } onWinning={ winHandler } />
      <Cards hand={ hand } isStarted={ isStarted } isWinner={ isWinner } />
      <DealButton
        onGetHand={ handHandler }
        isStarted={ isStarted }
        isWinner={ isWinner }
      />
      <ResetButton
        deck={ rawDeck }
        onResetDeck={ resetDeckHandler }
        isStarted={ isStarted }
        isWinner={ isWinner }
      /> 
      <Confetti active={isWinner} config={confettiParams} />
    </div>
  );
};
