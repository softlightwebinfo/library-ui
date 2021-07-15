import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Message} from "../components/Message";

export default {
    title: 'Base/Message/Default',
    component: Message,
    argTypes: {},
    args: {
        description: "Informational"
    }
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const Default = Template.bind({});
export const Description = Template.bind({});
Description.args = {
    type: "success",
    title: "Success",
    description: (
        <p>
            Additional description and informations about copywriting.
            <br/>
            <a href="#">This is a Link.</a>
        </p>
    )
};

export const Icon = Template.bind({});
Icon.args = {
    showIcon: true,
};
