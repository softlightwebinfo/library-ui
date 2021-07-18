import React, {useCallback, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Container} from "../components/Container/Container";
import {Content} from "../components/Content/Content";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {Dropdown, DropdownItem, Icon, Nav, NavItem, Sidenav, SidenavBody} from "../components";
import {SidenavHeader} from "../components/Sidenav/SidenavHeader";
import {Header} from "../components/Header/Header";
import {SidebarPage} from "../components/Sidebar/SidebarPage";
import {faAppleAlt, faLayerGroup, faLifeRing, faMagic, faTachometerAlt} from "@fortawesome/free-solid-svg-icons";
import {NavToggle} from "../components/Nav/NavToggle";

export default {
    title: 'Layouts/Dashboard',
    component: Container,
    argTypes: {},
    args: {
        children: "Content"
    }
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => {
    const [{expand}, setState] = useState({
        expand: true,
    });
    const handleToggle = useCallback(() => {
        setState(e => ({
            expand: !e.expand,
        }));
    }, []);
    return (
        <SidebarPage>
            <Container hasSidebar>
                <Sidebar
                    style={{display: 'flex', flexDirection: 'column'}}
                    width={expand ? 260 : 56}
                    collapsible
                >
                    <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                        <SidenavHeader>
                            <Icon icon={faAppleAlt} style={{verticalAlign: 0}}/>
                            <span style={{marginLeft: 12}}> BRAND</span>
                        </SidenavHeader>
                        <SidenavBody>
                            <Nav>
                                <NavItem eventKey="1" active icon={<Icon icon={faTachometerAlt}/>}>
                                    Dashboard
                                </NavItem>
                                <NavItem eventKey="2" icon={<Icon icon={faLayerGroup}/>}>
                                    User Group
                                </NavItem>
                                <Dropdown
                                    isItem
                                    eventKey="3"
                                    title="Advanced"
                                    icon={<Icon icon={faMagic}/>}
                                    placementMenu="right-start"
                                >
                                    <DropdownItem eventKey="3-1">Geo</DropdownItem>
                                    <DropdownItem eventKey="3-2">Devices</DropdownItem>
                                    <DropdownItem eventKey="3-3">Brand</DropdownItem>
                                    <DropdownItem eventKey="3-4">Loyalty</DropdownItem>
                                    <DropdownItem eventKey="3-5">Visit Depth</DropdownItem>
                                </Dropdown>
                                <Dropdown
                                    isItem
                                    eventKey="4"
                                    trigger="click"
                                    title="Settings"
                                    icon={<Icon icon={faLifeRing}/>}
                                    placementMenu="right-start"
                                >
                                    <DropdownItem eventKey="4-1">Applications</DropdownItem>
                                    <DropdownItem eventKey="4-2">Websites</DropdownItem>
                                    <DropdownItem eventKey="4-3">Channels</DropdownItem>
                                    <DropdownItem eventKey="4-4">Tags</DropdownItem>
                                    <DropdownItem eventKey="4-5">Versions</DropdownItem>
                                </Dropdown>
                            </Nav>
                        </SidenavBody>
                    </Sidenav>
                    <NavToggle expand={expand} onChange={handleToggle}/>
                </Sidebar>
                <Container>
                    <Header>
                        <h2>Page Title</h2>
                    </Header>
                    <Content>Content</Content>
                </Container>
            </Container>
        </SidebarPage>
    );
}
export const Default = Template.bind({});
