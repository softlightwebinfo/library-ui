import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ButtonGroup} from "../components/ButtonGroup";
import {Button} from "../components/Button";

export default {
    title: 'Base/ButtonGroup',
    component: ButtonGroup,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
    <ButtonGroup {...args} >
        <Button>Default</Button>
        <Button>Largue</Button>
        <Button>Small</Button>
    </ButtonGroup>
);

export const Default = Template.bind({});
export const Vertical = Template.bind({});
Vertical.args = {
    vertical: true,
};