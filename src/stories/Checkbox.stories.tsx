import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Divider} from "../components";
import {Checkbox, CheckboxGroup} from "../components/Checkbox";

export default {
    title: 'Base/Checkbox/Default',
    component: Checkbox,
    argTypes: {},
    args: {
        children: "Checkbox"
    }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
    return (
        <Checkbox
            {...args}
            name={"HOLA"}
            value={"Hola"}
            onChange={console.log}
        />
    );
}
const TemplateGroup: ComponentStory<typeof Checkbox> = (args) => {
    return (
        <>
            <CheckboxGroup name={"hola"}>
                <Checkbox value={"hola-Hola"}>Hola</Checkbox>
                <Checkbox value={"hola-test"}>Test</Checkbox>
                <Checkbox value={"hola-pepe"}>Pepe</Checkbox>
                <Checkbox value={"hola-carlos"}>Carlos</Checkbox>
            </CheckboxGroup>
            <Divider/>
            <CheckboxGroup name={"pepe"}>
                <Checkbox value={"pepe-Hola"}>Hola</Checkbox>
                <Checkbox value={"pepe-test"}>Test</Checkbox>
                <Checkbox value={"pepe-pepe"}>Pepe</Checkbox>
                <Checkbox value={"pepe-carlos"}>Carlos</Checkbox>
            </CheckboxGroup>
            <Divider/>
            <CheckboxGroup name={"prueba"}>
                <Checkbox value={"prueba-Hola"}>Hola</Checkbox>
                <Checkbox value={"prueba-test"}>Test</Checkbox>
                <Checkbox value={"prueba-pepe"}>Pepe</Checkbox>
                <Checkbox value={"prueba-carlos"}>Carlos</Checkbox>
            </CheckboxGroup>
            <Divider/>
            <CheckboxGroup name={"prueba"} horizontal>
                <Checkbox value={"prueba-Hola"}>Hola</Checkbox>
                <Checkbox value={"prueba-test"}>Test</Checkbox>
                <Checkbox value={"prueba-pepe"}>Pepe</Checkbox>
                <Checkbox value={"prueba-carlos"}>Carlos</Checkbox>
            </CheckboxGroup>
        </>
    );
}

export const Default = Template.bind({});
export const Group = TemplateGroup.bind({});
Default.args = {}