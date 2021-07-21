import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Panel} from "../components/Panel/Panel";
import {FlexboxGrid, FlexboxGridItem, Placeholder} from "../components";

export default {
    title: 'Base/Panel/Default',
    component: Panel,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Panel>;
const Card = (props: any) => (
    <Panel {...props} bordered header="Card title">
        <Placeholder/>
    </Panel>
);
const Template: ComponentStory<typeof Panel> = (args) => (
    <Panel {...args}>
        <Placeholder/>
    </Panel>
);
const Template2: ComponentStory<typeof Panel> = (args) => (
    <Panel {...args} style={{display: 'inline-block', width: 240}}>
        <img src="https://via.placeholder.com/240x240" height="240"/>
        <Panel header="RSUITE">
            <p>
                <small>A suite of React components, sensible UI design, and a friendly development experience.</small>
            </p>
        </Panel>
    </Panel>
);
const Template3: ComponentStory<typeof FlexboxGrid> = (args) => (
    <FlexboxGrid {...args}>
        <FlexboxGridItem md={6} sm={12}>
            <Card/>
        </FlexboxGridItem>
        <FlexboxGridItem md={6} sm={12}>
            <Card/>
        </FlexboxGridItem>
        <FlexboxGridItem md={6} sm={12}>
            <Card/>
        </FlexboxGridItem>
        <FlexboxGridItem md={6} sm={12}>
            <Card/>
        </FlexboxGridItem>
    </FlexboxGrid>
);

export const Default = Template.bind({});
Default.args = {
    header: "Panel title"
};
export const Bordered = Template.bind({});
Bordered.args = {
    header: "Panel title",
    bordered: true,
}
export const Shaded = Template.bind({});
Shaded.args = {
    header: "Panel title",
    shaded: true,
}
export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
    bordered: true,
}
export const CardDefault = Template2.bind({});
CardDefault.args = {
    shaded: true,
    bordered: true,
    bodyFill: true,
}
export const Group = Template3.bind({});
Group.args = {}
export const Gap = Template3.bind({});
Gap.args = {
    gap: 10
}