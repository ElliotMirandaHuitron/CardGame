import React from 'react';
import { ResetButton } from './ResetButton';

export default {
  title: 'CardsGame/ResetButton',
  component: ResetButton,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <ResetButton {...args} />;//Esto se renderea en el Canvas de Storybook

export const Reset = Template.bind({});
Reset.args = {
    isStarted: true,
    isWinner: '',
    onResetDeck: ()=>{}
};

export const PlayAgain = Template.bind({});
PlayAgain.args = {
    isStarted: true,
    isWinner: 'true',
    onResetDeck: ()=>{}
};
