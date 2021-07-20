import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Input} from "../components/Input/Input";
import {InputGroup} from "../components/Input/InputGroup";
import {Icon} from '../components';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {InputGroupAddon} from "../components/Input/InputGroupAddon";
import {InputGroupButton} from "../components/Input/InputGroupButton";

export default {
    title: 'Base/Input/Default',
    component: Input,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
const TemplateGroupAddon: ComponentStory<typeof InputGroup> = (args) => (
    <InputGroup {...args}>
        <Input placeholder={"Name"}/>
        <InputGroupAddon>
            <Icon icon={faSearch}/>
        </InputGroupAddon>
    </InputGroup>
);
const TemplateGroupButton: ComponentStory<typeof InputGroup> = (args) => (
    <InputGroup {...args}>
        <Input placeholder={"Name"}/>
        <InputGroupButton>
            <Icon icon={faSearch}/>
        </InputGroupButton>
    </InputGroup>
);

export const Default = Template.bind({});
Default.args = {
    placeholder: "Nombre"
}
export const Group = TemplateGroupAddon.bind({});
export const GroupButton = TemplateGroupButton.bind({});
