import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Container} from "../components/Container/Container";
import {Header} from "../components/Header/Header";
import {Content} from "../components/Content/Content";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {Footer} from "../components/Footer/Footer";

export default {
    title: 'Base/Container/Default',
    component: Container,
    argTypes: {},
    args: {
        children: "Content"
    }
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;
const TemplateLayout: ComponentStory<typeof Container> = (args) => (
    <Container {...args}>
        <Header preview>Header</Header>
        <Content preview>Content</Content>
        <Footer preview>Footer</Footer>
    </Container>
);
const TemplateLayoutSidebar: ComponentStory<typeof Container> = (args) => (
    <Container {...args}>
        <Sidebar preview>Sidebar</Sidebar>
        <Container>
            <Header preview>Header</Header>
            <Content preview>Content</Content>
            <Footer preview>Footer</Footer>
        </Container>
    </Container>
);
const TemplateLayoutSidebarHeader: ComponentStory<typeof Container> = (args) => (
    <Container {...args}>
        <Header preview>Header</Header>
        <Container hasSidebar>
            <Sidebar preview>Sidebar</Sidebar>
            <Content preview>Content</Content>
        </Container>
        <Footer preview>Footer</Footer>
    </Container>
);
const TemplateLayoutSidebarHeader2: ComponentStory<typeof Container> = (args) => (
    <Container {...args}>
        <Header preview>Header</Header>
        <Container hasSidebar>
            <Content preview>Content</Content>
            <Sidebar preview>Sidebar</Sidebar>
        </Container>
        <Footer preview>Footer</Footer>
    </Container>
);

export const Default = Template.bind({});
export const Layout = TemplateLayout.bind({});
export const LayoutSidebar = TemplateLayoutSidebar.bind({});
LayoutSidebar.args = {
    hasSidebar: true,
};
export const LayoutSidebarHeader = TemplateLayoutSidebarHeader.bind({});
LayoutSidebarHeader.args = {};
export const LayoutSidebarHeaderRight = TemplateLayoutSidebarHeader2.bind({});
