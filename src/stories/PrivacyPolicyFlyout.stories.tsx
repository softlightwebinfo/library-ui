import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Drawer } from "../components";
import { PrivacyPolicy } from "../widget/PrivacyPolicy/PrivacyPolicy";

export default {
  title: 'Widgets/PrivacyPolicy/Flyout',
  component: PrivacyPolicy,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof PrivacyPolicy>;

const Template: ComponentStory<typeof PrivacyPolicy> = (args) => (
  <Drawer show={true} placement={"bottom"} size={"initial"}>
    <PrivacyPolicy { ...args } />
  </Drawer>
);

export const Default = Template.bind({});
Default.args = {
  title: "Nueva política de privacidad",
  description: "Debido a la nueva normativa de protección de datos(GDPR) es necesario que aceptes nuestra política" +
    " de privacidad para que podamos seguir prestando el servicio con normalidad",
  buttonText: "Acepto la politica de privacidad",
  linkText: "Consultar politica de privacidad",
  white: true,
};
