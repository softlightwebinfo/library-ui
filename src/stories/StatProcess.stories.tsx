import { faBan, faFile, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Icon, Panel } from "../components";
import { StatProcess } from "../widget/StatProcess/StatProcess";

export default {
  title: 'Widgets/StatProcess/Default',
  component: StatProcess,
  argTypes: {},
  args: {
    title: "!Buenas noches Rafa!",
    subTitle: "Empieza a descubrir CRM",
    onClick: console.log,
    list: [
      { success: true, icon: <Icon icon={ faHome }/>, label: "Crear cuenta", button: "Nueva cuenta" },
      { success: false, icon: <Icon icon={ faUser }/>, label: "Añade tu primer contacto", button: "Nueva contacto" },
      { success: false, icon: <Icon icon={ faFile }/>, label: "Envia tu primera factura", button: "Crear factura" },
      { success: false, icon: <Icon icon={ faBan }/>, label: "Conecta tus bancos", button: "Añadir banco" },
    ],
  },
} as ComponentMeta<typeof StatProcess>;

const Template: ComponentStory<typeof StatProcess> = (args) => <StatProcess { ...args } />;
const Template2: ComponentStory<typeof StatProcess> = (args) => (
  <Panel card>
    <StatProcess { ...args } />
  </Panel>
);

export const Default = Template.bind({});
export const Card = Template2.bind({});
Default.args = {

};
