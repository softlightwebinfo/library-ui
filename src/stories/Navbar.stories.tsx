import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Icon, Nav, Navbar, NavbarBody, NavbarHeader, NavItem} from "../components";
import {faHome} from "@fortawesome/free-solid-svg-icons";

export default {
    title: 'Base/Navbar/Default',
    component: Navbar,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
    <Navbar {...args}>
        <NavbarHeader>
            <a href="#" className="navbar-brand">RSUITE</a>
        </NavbarHeader>
        <NavbarBody>
            <Nav>
                <NavItem icon={<Icon icon={faHome}/>}>Home</NavItem>
                <NavItem>News</NavItem>
                <NavItem>Solutions</NavItem>
                <NavItem>Products</NavItem>
                <NavItem>About</NavItem>
            </Nav>
        </NavbarBody>
    </Navbar>
);
const Template2: ComponentStory<typeof Navbar> = (args) => (
    <Navbar {...args}>
        <NavbarHeader>
            <a href="#" className="navbar-brand">RSUITE</a>
        </NavbarHeader>
        <NavbarBody>
            <Nav>
                <NavItem icon={<Icon icon={faHome}/>}>Home</NavItem>
                <NavItem>News</NavItem>
                <NavItem>Solutions</NavItem>
                <NavItem>Products</NavItem>
                <NavItem>About</NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem>Login</NavItem>
                <NavItem>Register</NavItem>
            </Nav>
        </NavbarBody>
    </Navbar>
);

export const Default = Template.bind({});
export const PullRight = Template2.bind({});