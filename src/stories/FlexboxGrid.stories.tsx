import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {FlexboxGrid} from "../components/FlexboxGrid/FlexboxGrid";
import {FlexboxGridItem} from "../components/FlexboxGrid/FlexboxGridItem";

export default {
    title: 'Base/FlexboxGrid/Default',
    component: FlexboxGrid,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof FlexboxGrid>;

const Template: ComponentStory<typeof FlexboxGrid> = (args) => (
    <FlexboxGrid {...args}>
        <FlexboxGridItem colspan={3}>colspan={6}</FlexboxGridItem>
        <FlexboxGridItem colspan={6}>colspan={6}</FlexboxGridItem>
        <FlexboxGridItem colspan={3}>colspan={6}</FlexboxGridItem>
        <FlexboxGridItem colspan={6}>colspan={6}</FlexboxGridItem>
    </FlexboxGrid>
);
const TemplateResponsive: ComponentStory<typeof FlexboxGrid> = (args) => (
    <FlexboxGrid {...args}>
        <FlexboxGridItem sm={6} xs={12} md={6} lg={4} xl={2} colspan={3}>colspan={6}</FlexboxGridItem>
        <FlexboxGridItem sm={6} xs={12} md={6} lg={4} xl={2} colspan={6}>colspan={6}</FlexboxGridItem>
        <FlexboxGridItem sm={6} xs={12} md={6} lg={4} xl={2} colspan={3}>colspan={6}</FlexboxGridItem>
        <FlexboxGridItem sm={6} xs={12} md={6} lg={4} xl={2} colspan={6}>colspan={6}</FlexboxGridItem>
    </FlexboxGrid>
);

export const Default = Template.bind({});
Default.args = {};
export const Responsive = TemplateResponsive.bind({});
