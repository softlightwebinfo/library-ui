import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ContainerGrid} from "../components/ContainerGrid/ContainerGrid";

export default {
    title: 'Base/ContainerGrid/Default',
    component: ContainerGrid,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof ContainerGrid>;

const Template: ComponentStory<typeof ContainerGrid> = (args) => (
    <ContainerGrid {...args}>
        Hola
    </ContainerGrid>
);

export const Default = Template.bind({});
Default.args = {};