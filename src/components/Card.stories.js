import React from 'react';
import { Card } from './Card';



export default {
  title: 'CardsGame/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    }
  },
};

const Template = (args) => <Card {...args} />;//Esto se renderea en el Canvas de Storybook
    //spade ♠
    //club ♣
    //diamond ♦
    //heart ♥
export const aCard = Template.bind({});
aCard.args = {
    card:{
        number:"A",
        shape:"♦"
    },
    shape: "♠,♥,♣,♦"
};
