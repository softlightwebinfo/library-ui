import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Icon, Nav, NavItem} from "../components";
import {faHome} from "@fortawesome/free-solid-svg-icons";

export default {
    title: 'Base/Nav/Default',
    component: Nav,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => (
    <Nav {...args}>
        <NavItem icon={<Icon icon={faHome}/>}>Home</NavItem>
        <NavItem>News</NavItem>
        <NavItem>Solutions</NavItem>
        <NavItem>Products</NavItem>
        <NavItem>About</NavItem>
    </Nav>
);

export const Default = Template.bind({});

const TemplateAppearance: ComponentStory<typeof Nav> = (args) => (
    <Nav {...args}>
        <NavItem eventKey={"home"} icon={<Icon icon={faHome}/>}>Home</NavItem>
        <NavItem eventKey={"new"}>News</NavItem>
        <NavItem eventKey={"solutions"}>Solutions</NavItem>
        <NavItem eventKey={"products"}>Products</NavItem>
        <NavItem eventKey={"about"}>About</NavItem>
    </Nav>
);
export const Appearance = TemplateAppearance.bind({});
Appearance.args = {
    appearance: "tabs",
    activeKey: "products"
};
export const Reversed = TemplateAppearance.bind({});
Reversed.args = {
    appearance: "tabs",
    activeKey: "products",
    reversed: true,
};
export const Subtle = TemplateAppearance.bind({});
Subtle.args = {
    appearance: "subtle",
    activeKey: "products",
    onSelect: console.log,
};
export const SubtleReverse = TemplateAppearance.bind({});
SubtleReverse.args = {
    appearance: "subtle",
    activeKey: "products",
    reversed: true,
    onSelect: console.log,
};
export const Vertical = TemplateAppearance.bind({});
Vertical.args = {
    appearance: "default",
    activeKey: "products",
    vertical: true,
};
export const VerticalTabs = TemplateAppearance.bind({});
VerticalTabs.args = {
    appearance: "tabs",
    activeKey: "products",
    vertical: true,
};
export const VerticalReversedTabs = TemplateAppearance.bind({});
VerticalReversedTabs.args = {
    appearance: "tabs",
    activeKey: "products",
    vertical: true,
    reversed: true,
};
export const VerticalSubtle = TemplateAppearance.bind({});
VerticalSubtle.args = {
    appearance: "subtle",
    activeKey: "products",
    vertical: true,
};
export const VerticalReversedSubtle = TemplateAppearance.bind({});
VerticalReversedSubtle.args = {
    appearance: "subtle",
    activeKey: "products",
    vertical: true,
    reversed: true,
};
export const Block = TemplateAppearance.bind({});
Block.args = {
    appearance: "subtle",
    activeKey: "products",
    vertical: true,
    reversed: true,
    block: true,
};
export const BlockTab = TemplateAppearance.bind({});
BlockTab.args = {
    appearance: "tabs",
    activeKey: "products",
    vertical: true,
    reversed: true,
    block: true,
};