import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Radio} from "../components/Radio/Radio";
import {RadioGroup} from "../components/Radio/RadioGroup";
import {Divider} from "../components";

export default {
    title: 'Base/Radio/Default',
    component: Radio,
    argTypes: {},
    args: {
        children: "Radio"
    }
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
    return (
        <Radio
            {...args}
            name={"HOLA"}
            value={"Hola"}
            onChange={console.log}
        />
    );
}
const TemplateGroup: ComponentStory<typeof Radio> = (args) => {
    return (
        <>
            <RadioGroup name={"hola"}>
                <Radio value={"hola-Hola"}>Hola</Radio>
                <Radio value={"hola-test"}>Test</Radio>
                <Radio value={"hola-pepe"}>Pepe</Radio>
                <Radio value={"hola-carlos"}>Carlos</Radio>
            </RadioGroup>
            <Divider/>
            <RadioGroup name={"pepe"}>
                <Radio value={"pepe-Hola"}>Hola</Radio>
                <Radio value={"pepe-test"}>Test</Radio>
                <Radio value={"pepe-pepe"}>Pepe</Radio>
                <Radio value={"pepe-carlos"}>Carlos</Radio>
            </RadioGroup>
            <Divider/>
            <RadioGroup name={"prueba"}>
                <Radio value={"prueba-Hola"}>Hola</Radio>
                <Radio value={"prueba-test"}>Test</Radio>
                <Radio value={"prueba-pepe"}>Pepe</Radio>
                <Radio value={"prueba-carlos"}>Carlos</Radio>
            </RadioGroup>
            <Divider/>
            <RadioGroup name={"prueba"} horizontal>
                <Radio value={"prueba-Hola"}>Hola</Radio>
                <Radio value={"prueba-test"}>Test</Radio>
                <Radio value={"prueba-pepe"}>Pepe</Radio>
                <Radio value={"prueba-carlos"}>Carlos</Radio>
            </RadioGroup>
        </>
    );
}

export const Default = Template.bind({});
export const Group = TemplateGroup.bind({});
Default.args = {}