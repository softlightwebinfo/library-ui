import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Line} from "../components/Line/Line";

export default {
    title: 'Base/Line/Default',
    component: Line,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args) => <Line {...args} />;

export const Default = Template.bind({});
Default.args = {
    percent: 30,
};
export const Color = Template.bind({});
Color.args = {
    percent: 10,
    strokeColor: "#ffc107"
};
export const Status = Template.bind({});
Status.args = {
    percent: 10,
    status: "fail"
};