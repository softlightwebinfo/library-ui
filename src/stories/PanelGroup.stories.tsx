import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Panel} from "../components/Panel/Panel";
import {Placeholder} from "../components";
import {PanelGroup} from "../components/Panel/PanelGroup";

export default {
    title: 'Base/Panel/Group',
    component: Panel,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => (
    <PanelGroup {...args}>
        <Panel header="Panel 1">
            <Placeholder/>
        </Panel>
        <Panel header="Panel 2">
            <Placeholder/>
        </Panel>
        <Panel header="Panel 3">
            <Placeholder/>
        </Panel>
    </PanelGroup>
);
export const Default = Template.bind({});
Default.args = {}