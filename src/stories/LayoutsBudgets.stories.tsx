import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Accordion} from '../components';

export default {
    title: 'Base/Accordion/Multiple',
    component: Accordion,
    argTypes: {},
    args: {
        data: [
            {
                title: "I noticed some erratic behavior from screen",
                content: "Screens are great assets for anyone working in an office set up. They allow you to have more programs open, multitask and be more productive. Hopefully"
            },
            {
                title: "Some of my keyboard keys are not working properly",
                content: "After a while, it’s common for keyboards to start malfunctioning. We have the habit of pressing the same keys which causes stress on their mechanics leading to problems."
            },
            {
                title: "I need a new mouse, the left-click is not working",
                content: "Mice are incredible accelerators that ease navigation and access. They easily become overused, with all the clicking, dragging and scrolling, which means their life can be short."
            }
        ]
    }
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
export const IsMultipleItems = Template.bind({});
IsMultipleItems.args = {
    isMultipleItems: true,
}