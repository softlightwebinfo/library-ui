import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Navbar, NavbarBody, NavbarHeader} from "../components";

export default {
    title: 'Base/Navbar/Default',
    component: Navbar,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
    <Navbar {...args}>
        <NavbarHeader>
            <a href="#" className="navbar-brand logo">RSUITE</a>
        </NavbarHeader>
        <NavbarBody>

        </NavbarBody>
    </Navbar>
);

export const Default = Template.bind({});