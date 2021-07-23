import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stat } from "../widget/Stat/Stat";

export default {
  title: 'Widgets/Stat/Default',
  component: Stat,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Stat>;

const Template: ComponentStory<typeof Stat> = (args) => <Stat { ...args } />;

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
export const Price = Template.bind({});
Price.args = {
  percent: 10,
  topLeftText: "Compras de venta",
  topRightText: "0.00€ - 0.00€ (0%)",
  title: "Cuentas de venta",
  subTitle: "Año actual",
  price: "99.00€",
};
