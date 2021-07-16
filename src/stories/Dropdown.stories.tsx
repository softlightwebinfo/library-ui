import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ButtonToolbar, Dropdown, DropdownItem, DropdownMenu} from '../components';

export default {
    title: 'Base/Dropdown/Default',
    component: Dropdown,
    argTypes: {},
    args: {
        title: "Default"
    }
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} >
        <DropdownItem>New File</DropdownItem>
        <DropdownItem>New File with Current Profile</DropdownItem>
        <DropdownItem>Download As...</DropdownItem>
        <DropdownItem>Export PDF</DropdownItem>
        <DropdownItem>Export HTML</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>About</DropdownItem>
    </Dropdown>
);

const Template2: ComponentStory<typeof Dropdown> = (args) => (
    <ButtonToolbar>
        <Dropdown activeKey="a" {...args}>
            <DropdownItem eventKey="a">Active Item</DropdownItem>
            <DropdownItem eventKey="b">Item B</DropdownItem>
            <DropdownItem eventKey="c">Item C</DropdownItem>
            <DropdownItem eventKey="d">Item D</DropdownItem>
        </Dropdown>

        <Dropdown activeKey="e-2" {...args}>
            <DropdownItem eventKey="a">Item A</DropdownItem>
            <DropdownItem eventKey="b">Item B</DropdownItem>
            <DropdownItem eventKey="c">Item C</DropdownItem>
            <DropdownItem eventKey="d">Item D</DropdownItem>
            <DropdownMenu title="Active Menu">
                <DropdownItem eventKey="e-1">Item E-1</DropdownItem>
                <DropdownItem eventKey="e-2">Active Item</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </ButtonToolbar>
);

export const Default = Template.bind({});
Default.args = {}
export const Trigger = Template.bind({});
Trigger.args = {
    trigger: "hover"
}

export const ActiveState = Template2.bind({});
ActiveState.args = {}
export const Disabled = Template2.bind({});
Disabled.args = {
    isDisabled: true
}