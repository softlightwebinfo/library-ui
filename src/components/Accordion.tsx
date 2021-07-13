import React, {useCallback, useState} from "react";
import {IAccordionProps} from "../props/IAccordionProps";
import {AccordionItem} from "./AccordionItem";
import st from "../sass/modules/Accordion.module.scss";
import {IAccordionData} from "../interfaces/IAccordionData";

export const Accordion = (props: IAccordionProps) => {
    const [active, setActive] = useState<number[]>([]);

    const onClick = useCallback((index: number, _item: IAccordionData) => {
        if (props.isMultipleItems) {
            return setActive(prv => {
                if (prv.indexOf(index) > -1) {
                    return prv.filter(indexItem => indexItem != index);
                }
                return [...prv, index]
            })
        }
        setActive((prv) => {
            if (prv.indexOf(index) > -1) {
                return [];
            }
            return [index];
        });
    }, []);
    return (
        <div className={st.Accordion}>
            {props.data.map((item, index) => (
                <AccordionItem
                    onClick={() => onClick(index, item)}
                    key={index}
                    open={active.indexOf(index) != -1}
                    {...item}
                />
            ))}
        </div>
    );
};