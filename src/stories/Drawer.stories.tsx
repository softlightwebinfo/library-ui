import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button, ButtonToolbar, Placeholder} from "../components";
import {Drawer} from "../components/Drawer/Drawer";
import {useToggle} from "@codeunic/library-hooks";
import {DrawerHeader} from "../components/Drawer/DrawerHeader";
import {DrawerTitle} from "../components/Drawer/DrawerTitle";
import {DrawerBody} from "../components/Drawer/DrawerBody";
import {DrawerFooter} from "../components/Drawer/DrawerFooter";

export default {
    title: 'Base/Drawer/Default',
    component: Drawer,
    argTypes: {},
    args: {}
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
    const [show, {toggle, off}] = useToggle();
    return (
        <div>
            <ButtonToolbar>
                <Button onClick={toggle}>Open</Button>
            </ButtonToolbar>
            <Drawer
                {...args}
                show={show}
                onHide={off}
            >
                <DrawerHeader>
                    <DrawerTitle>Drawer Title</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <Placeholder/>
                    <Placeholder/>
                    <Placeholder/>
                    <Placeholder/>
                    <Placeholder/>
                    <Placeholder/>
                    <Placeholder/>
                    <Placeholder/>
                    <Placeholder/>
                </DrawerBody>
                <DrawerFooter>
                    <Button onClick={off} appearance="primary">Confirm</Button>
                    <Button onClick={off} appearance="subtle">Cancel</Button>
                </DrawerFooter>
            </Drawer>
        </div>
    );
}

export const Default = Template.bind({});
Default.args = {
};