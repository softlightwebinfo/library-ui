import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {TagGroup} from "../components/Tag/TagGroup";
import {Tag} from "../components/Tag";

export default {
    title: 'Base/Tag/Group',
    component: TagGroup,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof TagGroup>;

const Template: ComponentStory<typeof TagGroup> = (args) => {
    const [state, setState] = useState(["Tag", "Tag2", "Tag3"]);
    return (
        <TagGroup {...args} >
            {state.map((item, index) => (
                <Tag
                    key={index}
                    closeable
                    color={"orange"}
                    onClose={() => setState(e => e.filter(i => i != item))}
                >
                    {item}
                </Tag>
            ))}
        </TagGroup>
    );
}

export const Default = Template.bind({});
