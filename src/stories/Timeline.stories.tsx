import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Timeline} from "../components/Timeline/Timeline";
import {TimelineItem} from "../components/Timeline/TimelineItem";

export default {
    title: 'Base/Timeline/Default',
    component: Timeline,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => (
    <Timeline {...args}>
        <TimelineItem>16:27:41 Your order starts processing</TimelineItem>
        <TimelineItem>16:28:43 Your order to be ready for delivery</TimelineItem>
        <TimelineItem>16:28:45 Your parcel has been out of the library</TimelineItem>
        <TimelineItem>02:34:41 Send to Shanghai Hongkou Company</TimelineItem>
        <TimelineItem active>15:05:29 Sending you a piece</TimelineItem>
    </Timeline>
);
const TemplateAlign: ComponentStory<typeof Timeline> = (args) => (
    <Timeline {...args}>
        <TimelineItem>
            <p>2018-03-01</p>
            <p>Your order starts processing</p>
        </TimelineItem>
        <TimelineItem>
            <p>2018-03-02</p>
            <p>Order out of stock</p>
        </TimelineItem>
        <TimelineItem>
            <p>2018-03-10</p>
            <p>Arrival</p>
        </TimelineItem>
        <TimelineItem>
            <p>2018-03-12</p>
            <p>Order out of the library</p>
        </TimelineItem>
        <TimelineItem>
            <p>2018-03-15</p>
            <p>Sending you a piece</p>
        </TimelineItem>
    </Timeline>
);
export const Default = Template.bind({});
export const Align = TemplateAlign.bind({});
Align.args = {
    align: "left"
}