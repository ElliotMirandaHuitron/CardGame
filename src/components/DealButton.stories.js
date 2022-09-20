import React from 'react';
import { DealButton } from './DealButton';
//import { DealButtonController } from '../Card Comps/DealButtonController';

export default {
  title: 'CardsGame/DealButton',
  component: DealButton,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <DealButton {...args} />;//Esto se renderea en el Canvas de Storybook

export const Start = Template.bind({});
Start.args = {
    isStarted: false,
    isWinner:'',
};

export const Deal = Template.bind({});
Deal.args = {
    isStarted: true,
    isWinner:'',
};






/*DealButtonController.js , la idea era que los selectores y el click funcionaran por igual, pero solo servia una de las 2 formas de cambiar el state.
(crear el archivo y reemplazarlo aqui para testear*/
/*
import React, {useState} from 'react';
import { DealButton } from '../../components/DealButton';


export const DealButtonController = () => {

    const [isStarted, setIsStarted] = useState(false);

    const isStartedHandler = () =>{
        setIsStarted(!isStarted);
    }

  return (
    <div>
        <DealButton 
        isStarted={ isStarted }
        isWinner= {""}
        onGetHand= {isStartedHandler}
        />
    </div>
    
  );
};


*/