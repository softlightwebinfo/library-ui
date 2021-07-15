import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button} from "../components/Button";
import {ButtonToolbar} from "../components/Button/ButtonToolbar";

export default {
    title: 'Base/Button/Toolbar',
    component: ButtonToolbar,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof ButtonToolbar>;

const Template: ComponentStory<typeof ButtonToolbar> = (args) => (
    <ButtonToolbar {...args}>
        <Button>Default</Button>
        <Button>Largue</Button>
        <Button>Small</Button>
    </ButtonToolbar>
);

export const Default = Template.bind({});
Default.args = {
    children: "Default"
}