import React from "react"
import {IOverlayProps} from "../../props/IOverlayProps";
import classNames from "classnames";
import styles from '../../sass/modules/Overlay.module.scss';

export const Overlay = ({children, ...props}: IOverlayProps) => {
    const cs = classNames(styles.Overlay, {
        [styles.Show]: props.show,
    });
    return (
        <div className={cs} style={props.style}>
            {children}
        </div>
    )
}