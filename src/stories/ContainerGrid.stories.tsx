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
        <FlexboxGridItem colspan={6}>colspan={6}</FlexboxGridItem>
        <FlexboxGridItem colspan={6}>colspan={6}</FlexboxGridItem>
        <FlexboxGridItem colspan={6}>colspan={6}</FlexboxGridItem>
        <FlexboxGridItem colspan={6}>colspan={6}</FlexboxGridItem>
    </FlexboxGrid>
);

export const Default = Template.bind({});
Default.args = {};