import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {AccordionItem} from '../components';

export default {
    title: 'Base/Accordion/Item',
    component: AccordionItem,
    argTypes: {},
    args: {
        title: "I noticed some erratic behavior from screen",
        content: "Screens are great assets for anyone working in an office set up. They allow you to have more programs open, multitask and be more productive. Hopefully"
    }
} as ComponentMeta<typeof AccordionItem>;

const Template: ComponentStory<typeof AccordionItem> = (args) => <AccordionItem {...args} />;

export const Default = Template.bind({});