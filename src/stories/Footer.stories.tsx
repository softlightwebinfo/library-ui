import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Footer} from "../components/Footer/Footer";

export default {
    title: 'Base/Footer/Default',
    component: Footer,
    argTypes: {},
    args: {
        children: "Footer"
    }
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    preview: true,
}