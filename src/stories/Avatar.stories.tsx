import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Avatar} from "../components/Avatar/Avatar";
import {AvatarGroup} from "../components/Avatar/AvatarGroup";
import {Icon} from "../components";
import {faUser, faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {Badge} from "../components/Badge/Badge";

export default {
    title: 'Base/Avatar/Default',
    component: Avatar,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
const TemplateGroup: ComponentStory<typeof AvatarGroup> = (args) => (
    <AvatarGroup {...args} >
        <Avatar/>
        <Avatar circle/>
        <Avatar style={{background: '#7B1FA2'}}/>
    </AvatarGroup>
);
const TemplateGroupSize: ComponentStory<typeof AvatarGroup> = (args) => (
    <AvatarGroup {...args} >
        <Avatar size="lg">RS</Avatar>
        <Avatar size="md">RS</Avatar>
        <Avatar size="sm">RS</Avatar>
        <Avatar size="xs">RS</Avatar>
    </AvatarGroup>
);
const TemplateDot: ComponentStory<typeof Badge> = (args) => (
    <AvatarGroup  {...args} >
        <Badge>
            <Avatar>
                <Icon icon={faUser}/>
            </Avatar>
        </Badge>

        <Badge content="20">
            <Avatar>
                <Icon icon={faUserAlt}/>
            </Avatar>
        </Badge>

        <Badge content="9">
            <Avatar circle>
                <Icon icon={faUserAlt}/>
            </Avatar>
        </Badge>
    </AvatarGroup>
);

export const Default = Template.bind({});
Default.args = {
    children: "RS"
}
export const Circle = Template.bind({});
Circle.args = {
    children: "RS",
    circle: true,
}
export const Style = Template.bind({});
Style.args = {
    children: "RS",
    circle: true,
    style: {background: '#7B1FA2'}
}
export const IconChild = Template.bind({});
IconChild.args = {
    children: <Icon icon={faUser}/>,
    circle: true,
}
export const Group = TemplateGroup.bind({});
Group.args = {}
export const Image = Template.bind({});
Image.args = {
    src: "https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"
}
export const Size = TemplateGroupSize.bind({});
Size.args = {}
export const Dot = TemplateDot.bind({});
Size.args = {}