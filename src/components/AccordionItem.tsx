import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react"
import {IAccordionItemProps} from "../props/IAccordionItemProps";
import style from '../sass/modules/AccordionItem.module.scss';
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

export const AccordionItem = (props: IAccordionItemProps) => {
    const classNames = [style.AccordionItem];
    props.open && (classNames.push(style["AccordionItem--open"]));
    return (
        <div className={classNames.join(" ")}>
            <header onClick={props.onClick} className={style.AccordionItem__header}>
                <span>{props.title}</span>
                <FontAwesomeIcon icon={props.open ? faChevronUp : faChevronDown}/>
            </header>
            <section className={style.AccordionItem__section}>
                {props.content}
            </section>
        </div>
    )
}