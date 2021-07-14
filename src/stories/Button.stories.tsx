import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button} from "../components/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from "@fortawesome/free-solid-svg-icons";

export default {
    title: 'Base/Button',
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
    icon: <FontAwesomeIcon icon={faHome}/>,
    children:"HOLA"
};