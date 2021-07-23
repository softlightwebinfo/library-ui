import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Modal } from "../components";
import { Recommend } from "../widget/Recommend/Recommend";

export default {
  title: 'Widgets/Recommend/Modal',
  component: Recommend,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Recommend>;

const Template: ComponentStory<typeof Recommend> = (args) => (
  <Modal show={ true } size={"initial"}>
    <Recommend
      { ...args }
    />
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  title: "Hola Rafa",
  description: "¿Recomendarias el CMR a tus colegas o amigos?",
  left: "Poco probable",
  right: "Muy probable",
  footer: "Responder más adelante",
};
