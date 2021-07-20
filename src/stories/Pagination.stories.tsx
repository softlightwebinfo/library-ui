import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Pagination} from "../components/Pagination/Pagination";

export default {
    title: 'Base/Pagination/Default',
    component: Pagination,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
    totalRecords: 200,
    onPageChanged:(e, page) => {
        e.preventDefault();
        console.log(page)
    }
}