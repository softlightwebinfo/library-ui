import React, {useCallback, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Container} from "../components/Container/Container";
import {Content} from "../components/Content/Content";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {
    Dropdown,
    DropdownItem,
    Icon,
    Nav,
    Navbar,
    NavbarBody,
    NavbarHeader,
    NavItem,
    Sidenav,
    SidenavBody
} from "../components";
import {SidenavHeader} from "../components/Sidenav/SidenavHeader";
import {Header} from "../components/Header/Header";
import {SidebarPage} from "../components/Sidebar/SidebarPage";
import {
    faAppleAlt, faCog,
    faHome,
    faLayerGroup,
    faLifeRing,
    faMagic,
    faTachometerAlt
} from "@fortawesome/free-solid-svg-icons";
import {NavToggle} from "../components/Nav/NavToggle";
import {Footer} from "../components/Footer/Footer";

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
        <SidebarPage full>
            <Container hasSidebar>
                <Sidebar
                    style={{display: 'flex', flexDirection: 'column'}}
                    width={expand ? 260 : 56}
                    collapsible
                >
                    <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                        <SidenavHeader
                            style={!expand ? {display: "flex", alignItems: "center", justifyContent: "center"} : {}}
                        >
                            <Icon icon={faAppleAlt} style={{verticalAlign: 0}}/>
                            {expand && <span style={{marginLeft: 12}}> BRAND</span>}
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
                        <Navbar>
                            <NavbarHeader>
                                <a className="navbar-brand logo">BRAND</a>
                            </NavbarHeader>
                            <NavbarBody>
                                <Nav>
                                    <NavItem icon={<Icon icon={faHome} />}>Home</NavItem>
                                    <NavItem>News</NavItem>
                                    <NavItem>Products</NavItem>
                                    <Dropdown title="About">
                                        <DropdownItem>Company</DropdownItem>
                                        <DropdownItem>Team</DropdownItem>
                                        <DropdownItem>Contact</DropdownItem>
                                    </Dropdown>
                                </Nav>
                                <Nav pullRight>
                                    <NavItem icon={<Icon icon={faCog} />}>Settings</NavItem>
                                </Nav>
                            </NavbarBody>
                        </Navbar>
                    </Header>
                    <Content>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                        <p>Content</p>
                    </Content>
                    <Footer page>Footer</Footer>
                </Container>
            </Container>
        </SidebarPage>
    );
}
export const Default = Template.bind({});
