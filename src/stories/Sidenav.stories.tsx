import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Icon, Nav, NavItem, Sidenav, SidenavBody} from "../components";
import {faAppleAlt, faLayerGroup} from "@fortawesome/free-solid-svg-icons";

export default {
    title: 'Base/Sidenav/Default',
    component: Sidenav,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Sidenav>;

const Template: ComponentStory<typeof Sidenav> = (args) => (
    <div style={{width: 250}}>
        <Sidenav {...args}>
            <SidenavBody>
                <Nav>
                    <NavItem eventKey="1" icon={<Icon icon={faAppleAlt}/>}>
                        Dashboard
                    </NavItem>
                    <NavItem eventKey="2" icon={<Icon icon={faLayerGroup}/>}>
                        User Group
                    </NavItem>
                </Nav>
            </SidenavBody>
        </Sidenav>
    </div>
);

export const Default = Template.bind({});
Default.args = {
    defaultOpenKeys: ['3', '4'],
    activeKey: "1"
}