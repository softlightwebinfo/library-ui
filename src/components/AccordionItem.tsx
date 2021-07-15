import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useCallback} from "react"
import {IAccordionItemProps} from "../props/IAccordionItemProps";
import style from '../sass/modules/AccordionItem.module.scss';
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {useToggle} from "@codeunic/library-hooks";
import classNames from "classnames";

export const AccordionItem = (props: IAccordionItemProps) => {
    let [openToggle, {toggle}] = useToggle(props.open);
    const onClick = useCallback((evt) => {
        if (props.isDisabled) return;
        if (typeof props.open == "undefined") {
            toggle();
        }
        props.onClick?.(evt)
    }, [props.open, props.isDisabled])

    const open = props.open ?? openToggle;

    const cls = classNames(style.AccordionItem, {
        [style["AccordionItem--open"]]: open,
        [style.isDisabled]: props.isDisabled
    });

    return (
        <div className={cls}>
            <header onClick={onClick} className={style.AccordionItem__header}>
                <span>{props.title}</span>
                <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown}/>
            </header>
            <section className={style.AccordionItem__section}>
                {props.content}
            </section>
        </div>
    )
}