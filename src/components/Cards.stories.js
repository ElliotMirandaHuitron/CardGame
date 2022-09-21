import React from 'react';
import { Cards } from './Cards';

export default {
  title: 'CardsGame/WinOrLose',
  component: Cards,
  parameters: {
    backgrounds: {
      default: 'dark',
    }
  },
};

const Template = (args) => <Cards {...args} />;//Esto se renderea en el Canvas de Storybook
    //spade ♠
    //club ♣
    //diamond ♦
    //heart ♥
export const WinLose = Template.bind({});
WinLose.args = {
    hand: [{number:"A",shape:"♠"},{number:"2",shape:"♠"}],
    isStarted:true,
    isWinner:true,
};
