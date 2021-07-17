import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Spinner} from "../components/Spinner/Spinner";

export default {
    title: 'Base/Loader/Spinner',
    component: Spinner,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {

};