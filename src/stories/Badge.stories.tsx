import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Divider} from "../components";

export default {
    title: 'Base/Divider/Default',
    component: Divider,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => < Divider {...args} />;

export const Default = Template.bind({});