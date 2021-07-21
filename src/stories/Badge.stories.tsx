import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Badge, Button, ButtonGroup, ButtonToolbar} from "../components";

export default {
    title: 'Base/Badge/Default',
    component: Badge,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;
const TemplateButton: ComponentStory<typeof Badge> = (args) => (
    <Badge {...args}>
        <Button>New Message</Button>
    </Badge>
);
const Independent: ComponentStory<typeof Badge> = (args) => (
    <ButtonToolbar>
        <Badge/>
        <Badge style={{background: '#4caf50'}}/>
        <Badge content="99+"/>
        <Badge content="NEW"/>
    </ButtonToolbar>
);
export const Default = Template.bind({});
export const ButtonDefault = TemplateButton.bind({});
export const Content = TemplateButton.bind({});
Content.args = {
    content: "99"
};
export const Max = TemplateButton.bind({});
Max.args = {
    content: 1200
};
export const IndependentDot = Independent.bind({});
IndependentDot.args = {};