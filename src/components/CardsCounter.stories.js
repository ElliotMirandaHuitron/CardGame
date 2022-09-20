import React from 'react';
import { CardsCounter } from './CardsCounter'
import { deck } from '../helpers/deck'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardsGame/CardsCounter',
  component: CardsCounter,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },


  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardsCounter {...args} />;//Esto se renderea en el Canvas de Storybook

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  //primary: true,
  deck:deck
};












// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   //primary: true,
//   primary: 'primary',
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   primary: 'secondary',
//   label: 'Button',
// };

// ///Boton Terciario
// export const Terciary = Template.bind({});
// Terciary.args = {
//   primary: 'terciary',
//   label: 'Button',
// };
// ///
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
