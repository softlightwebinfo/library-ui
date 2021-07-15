import React from "react";
import {INavbarHeaderProps} from "../../props/INavbarHeaderProps";
import classNames from "classnames";
import styles from '../../sass/modules/NavbarHeader.module.scss';

export const NavbarHeader = (props: INavbarHeaderProps) => {
    const cs = classNames(styles.NavbarHeader, props.className);
    return (
        <div className={cs} style={props.style}>
            {props.children}
        </div>
    );
};