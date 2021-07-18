import React, {useCallback, useRef} from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Dropdown.module.scss';
import {IDropdownProps} from "../../props/IDropdownProps";
import {DropdownMenu} from "./DropdownMenu";
import {Button} from "../Button/Button";
import {Icon} from "../Icon/Icon";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {useOnClickOutside, useToggle} from "@codeunic/library-hooks";
import {ContextDropdown, IUseDropdown} from "../../context/useDropdown";
import {useNav} from "../../context";

export const Dropdown = ({className, trigger = "click", appearance = "subtle", style, ...props}: IDropdownProps) => {
    const ctxNav = useNav()
    const ref = useRef(null);
    const [show, {toggle, off, on}] = useToggle();
    useOnClickOutside(ref, off);
    const cs = classNames(styles.Dropdown, className, {
        [styles.Disabled]: props.isDisabled,
        [styles.NavVertical]: ctxNav.vertical,
    });

    const onClick = useCallback(() => {
        if (props.isDisabled || trigger !== "click" || !trigger?.includes("click")) return;
        toggle();
    }, [trigger]);

    const setIsShown = useCallback((show: boolean) => {
        if (props.isDisabled || trigger != "hover" || !trigger?.includes("hover")) return;
        show && on();
        !show && off();
    }, [trigger]);

    const value: IUseDropdown = {
        activeKey: props.activeKey,
        vertical: ctxNav.vertical,
    };
    const Component = props.isItem ? "li" : "div";
    return (
        <ContextDropdown.Provider value={value}>
            <Component className={cs} style={style}>
                <div
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    ref={ref} className={styles.Content}
                >
                    <Button className={styles.Button} appearance={appearance} onClick={onClick}>
                        {props.icon}
                        <span>{props?.renderTitle?.(props.children, props) ?? props.title}</span>
                        <Icon className={styles.Icon} icon={show ? faChevronUp : faChevronDown}/>
                    </Button>
                    <DropdownMenu
                        placement={props.placementMenu}
                        className={classNames({[styles.Show]: show})}
                        isMenu
                    >
                        {props.children}
                    </DropdownMenu>
                </div>
            </Component>
        </ContextDropdown.Provider>
    )
};