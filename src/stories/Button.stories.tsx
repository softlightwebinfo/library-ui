import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button, Icon as Icons} from "../components";
import {faHome} from "@fortawesome/free-solid-svg-icons";

export default {
    title: 'Base/Button/Default',
    component: Button,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Default"
}

export const Size = Template.bind({});
Size.args = {
    size: "sm",
    children: "Default"
};

export const Circle = Template.bind({});
Circle.args = {
    circle: true,
    children: "Default"
};

export const Icon = Template.bind({});
Icon.args = {
    icon: <Icons icon={faHome}/>,
    children: "HOLA"
};

export const Block = Template.bind({});
Block.args = {
    children: "HOLA",
    block: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: "HOLA",
    disabled: true,
    appearance: "primary"
};

export const Loading = Template.bind({});
Loading.args = {
    children: "HOLA",
    loading: true,
    appearance: "primary"
};