import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Content} from "../components/Content/Content";
import {Button} from "../components";
import {Modal} from "../components/Modal/Modal";
import {ModalHeader} from "../components/Modal/ModalHeader";
import {ModalFooter} from "../components/Modal/ModalFooter";
import {ModalTitle} from "../components/Modal/ModalTitle";
import {ModalBody} from "../components/Modal/ModalBody";
import {Placeholder} from "../components/Placeholder/Placeholder";
import {useToggle} from "@codeunic/library-hooks";

export default {
    title: 'Base/Modal/Default',
    component: Modal,
    argTypes: {},
    args: {
        children: "Content"
    }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    const [show, {on, off}] = useToggle();
    const setClose = () => off();
    const setOpen = () => on();
    return (
        <>
            <Button onClick={setOpen}>Open</Button>
            <Modal show={show} onHide={setClose}>
                <ModalHeader>
                    <ModalTitle>Modal Title</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Placeholder/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={setClose} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={setClose} appearance="subtle">
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export const Default = Template.bind({});
