import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Carousel} from "../components/Carousel/Carousel";

export default {
    title: 'Base/Carousel/Default',
    component: Carousel,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
    <Carousel {...args} style={{width: 600, height: 250}}>
        <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
            height="250"
        />
        <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
            height="250"
        />
        <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
            height="250"
        />
        <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
            height="250"
        />
        <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
            height="250"
        />
    </Carousel>
);

export const Default = Template.bind({});
export const Autoplay = Template.bind({});
Default.args = {}
Autoplay.args = {
    autoplay: true,
}