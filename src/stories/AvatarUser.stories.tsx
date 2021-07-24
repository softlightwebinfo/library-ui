import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AvatarUser } from "../components/Avatar/AvatarUser";

export default {
  title: 'Base/AvatarUser/Default',
  component: AvatarUser,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof AvatarUser>;

const Template: ComponentStory<typeof AvatarUser> = (args) => (
  <AvatarUser { ...args } />
);

export const Default = Template.bind({});

Default.args = {
  title: "Rafa",
  subTitle: "Perfil de usuario",
  name: "RG",
};
