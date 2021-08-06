import { faBook } from "@fortawesome/free-solid-svg-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from 'react';
import { Accordion, Badge, FlexboxGrid, FlexboxGridItem, Icon, Panel, Paragraph, Title } from "../components";

export default {
  title: 'Layouts/Budgets/List',
  component: Accordion,
  argTypes: {},
  args: {
    default: true,
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  const data = [
    {
      name: "Perfumado", list: [
        { num: "1000", date: "2020-10-10", client: "Formacasa", total: 2000, state: "Pendiente" },
        { num: "1001", date: "2020-10-10", client: "Formacasa", total: 2000, state: "Pagado" },
        { num: "1002", date: "2020-10-10", client: "Formacasa", total: 1000, state: "Pagado" },
        { num: "1003", date: "2020-10-10", client: "Formacasa", total: 2000, state: "Pagado" },
      ],
    },
    {
      name: "casasenocasion", list: [
        { num: "1004", date: "2020-10-10", client: "casasenocasion", total: 2000, state: "Pendiente" },
        { num: "1005", date: "2020-10-10", client: "casasenocasion", total: 200, state: "Pagado" },
        { num: "1006", date: "2020-10-10", client: "casasenocasion", total: 1000, state: "Pendiente" },
        { num: "1007", date: "2020-10-10", client: "casasenocasion", total: 49, state: "Pagado" },
      ],
    },
    {
      name: "Perfumado",
      list: [
        { num: "1000", date: "2020-10-10", client: "Formacasa", total: 2000, state: "Pendiente" },
        { num: "1001", date: "2020-10-10", client: "Formacasa", total: 2000, state: "Pagado" },
        { num: "1002", date: "2020-10-10", client: "Formacasa", total: 1000, state: "Pagado" },
        { num: "1003", date: "2020-10-10", client: "Formacasa", total: 2000, state: "Pagado" },
      ],
    },
    {
      name: "casasenocasion", list: [
        { num: "1004", date: "2020-10-10", client: "casasenocasion", total: 2000, state: "Pendiente" },
        { num: "1005", date: "2020-10-10", client: "casasenocasion", total: 200, state: "Pagado" },
        { num: "1006", date: "2020-10-10", client: "casasenocasion", total: 1000, state: "Pendiente" },
        { num: "1007", date: "2020-10-10", client: "casasenocasion", total: 49, state: "Pagado" },
      ],
    },
  ];
  return (
    <Accordion
      { ...args }
      initialOpen={ [...Array(data.length)].map((_, index) => index) }
      isMultipleItems
      data={ data.map((item, index) => ({
        title: item.name,
        content: (
          <FlexboxGrid gap={ 10 }>
            { item.list.map((itemList, indexList) => (
              <FlexboxGridItem colspan={ 3 }>
                <Panel
                  card={ args.default } shaded={ !args.default }
                  style={ !args.default ? { background: "gainsboro" } : {} }
                >
                  <Title>
                    <Icon style={ { marginRight: 10 } } icon={ faBook }/>
                    { itemList.num }
                  </Title>
                  <Paragraph><b>Client: </b>{ itemList.client }</Paragraph>
                  <Paragraph><b>Date:</b> { itemList.date }</Paragraph>
                  <Paragraph><b>Total:</b> { itemList.total }€</Paragraph>
                  <Paragraph absoluteRight><Badge content={ itemList.state }/></Paragraph>
                </Panel>
              </FlexboxGridItem>
            )) }
          </FlexboxGrid>
        ),
      })) }
    />);
};

export const Default = Template.bind({});
export const Other = Template.bind({});
Other.args = {
  default: false,
};
