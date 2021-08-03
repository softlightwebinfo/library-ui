import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paragraph } from "../components/Paragraph/Paragraph";

export default {
  title: 'Base/Paragraph/Default',
  component: Paragraph,
  argTypes: {},
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc elit, feugiat ut velit eget, pellentesque accumsan libero. Duis interdum ante sed ipsum imperdiet congue nec non mauris. Quisque ac ultricies nunc. Sed nisi diam, suscipit eu laoreet a, bibendum nec mauris. Aliquam tristique rhoncus ipsum scelerisque egestas. Maecenas rhoncus malesuada mauris, vel porta ex tincidunt non. Duis ac sapien in felis fermentum tristique. Nam a erat faucibus, varius magna ac, interdum tortor. Aenean quis varius mi, nec molestie neque. In dignissim diam in velit pharetra cursus. Integer gravida, arcu non sagittis iaculis, justo leo facilisis augue, consequat mollis risus erat quis velit. In turpis nibh, ornare ut facilisis id, dignissim non enim. Fusce maximus elit sit amet dolor aliquet, et tristique elit eleifend. Aenean ornare tortor sem, at sollicitudin ipsum scelerisque a.",
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph { ...args } />;

export const Default = Template.bind({});
