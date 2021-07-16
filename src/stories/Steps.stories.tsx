import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Divider, Steps, StepsItem} from '../components';

export default {
    title: 'Base/Steps/Default',
    component: Steps,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Steps>;

const Template: ComponentStory<typeof Steps> = (args) => (
    <div>
        <Steps {...args}>
            <StepsItem title="Finished"/>
            <StepsItem title="In progress"/>
            <StepsItem title="Waiting"/>
            <StepsItem title="Waiting"/>
        </Steps>
        <Divider/>
        <Steps {...args}>
            <StepsItem title="Finished" description="Description"/>
            <StepsItem title="In Progress" description="Description"/>
            <StepsItem title="Waiting" description="Description"/>
            <StepsItem title="Waiting" description="Description"/>
        </Steps>
    </div>
);
const Template2: ComponentStory<typeof StepsItem> = (args) => (
    <StepsItem {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    current: 1,
}
export const Item = Template2.bind({});
Item.args = {
    title: "Datos de contacto",
    isBorder: false,
}