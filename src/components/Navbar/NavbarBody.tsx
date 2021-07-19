import React from "react";
import {INavbarBodyProps} from "../../props/INavbarBodyProps";
import classNames from "classnames";
import styles from '../../sass/modules/NavbarBody.module.scss';

export const NavbarBody = (props: INavbarBodyProps) => {
    const cs = classNames(styles.NavbarBody, props.className, {
        [styles.Expanded]: props.expand === false
    });
    return (
        <div className={cs} style={props.style}>
            {props.children}
        </div>
    );
}