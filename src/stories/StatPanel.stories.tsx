import { faBan } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon, Panel } from "../components";
import { Stat } from "../widget/Stat/Stat";

export default {
  title: 'Widgets/Stat/Panel',
  component: Stat,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Stat>;

const Template: ComponentStory<typeof Stat> = (args) => (
  <Panel card>
    <Stat { ...args } />
  </Panel>
);

export const Default = Template.bind({});
Default.args = {
  percent: 10,
  bottomLeftText: "Suministros",
  topLeftText: "Compras de venta",
  bottomRightText: "0.00€ - 0.00€ (0%)",
  topRightText: "0.00€ - 0.00€ (0%)",
  title: "Cuentas de venta",
  subTitle: "Año actual",
};
export const Vertical = Template.bind({});
Vertical.args = {
  title: "Cuentas de venta",
  subTitle: "Año actual",
  icon: <Icon icon={ faBan }/>,
  center: true,
};
