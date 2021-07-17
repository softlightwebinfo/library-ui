import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/DropdownMenu.module.scss';
import {IDropdownMenuProps} from "../../props/IDropdownMenuProps";
import {Dropdown} from "./Dropdown";
import {useDropdown} from "../../context/useDropdown";

export const DropdownMenu = (
    {
        className,
        placement = "bottom-start",
        style,
        ...props
    }: IDropdownMenuProps
) => {
    const ctx = useDropdown();
    const cs = classNames(styles.DropdownMenu, className, {
        [styles.IsMenu]: props.isMenu,
        [styles[placement]]: !!placement,
    });

    const Component = (
        <ul className={cs} style={style}>
            {props.children}
        </ul>
    );

    if (props.title) {
        return (
            <Dropdown
                placementMenu={"top-right"}
                isItem
                title={props.title}
                activeKey={ctx.activeKey}
            >
                {props.children}
            </Dropdown>
        );
    }
    return (Component);
};
