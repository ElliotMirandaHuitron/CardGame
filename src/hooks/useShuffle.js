
import { useState, useCallback } from 'react';


export const useShuffle = ( rawDeck ) => {
    //copy
    const [deck, setDeck] = useState(rawDeck);
    
    const setShuffledDeck = useCallback((shuffDeck) => {
        //Shuffle Deck
        let cardsLeft = shuffDeck.length,
        originalIndex,
        randomIndex,
        random;
        for (let i = 1; i <= shuffDeck.length; i++) {
            //Random Index
            random = Math.random() * cardsLeft--;
            randomIndex = Math.floor(random);

            //Building Random Cards
            originalIndex = shuffDeck[cardsLeft]; //Hold last index value in t
            shuffDeck[cardsLeft] = shuffDeck[randomIndex]; //Cambio el valor del ultimo indice del deck por el valor del indice random
            shuffDeck[randomIndex] = originalIndex; //cambio valor del indice random por el Holdeado
            //console.log('Random Card: ',remDeck[cardsLeft]);//Each random card
        }
        setDeck(shuffDeck);
    },[])
    return [deck,setShuffledDeck]
}


