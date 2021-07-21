import React, {useEffect, useRef} from "react"
import {IDrawerProps} from "../../props/IDrawerProps";
import classNames from "classnames";
import styles from '../../sass/modules/Drawer.module.scss';
import {Overlay} from "../Overlay";
import {useOnClickOutside} from "@codeunic/library-hooks";

export const Drawer = ({placement = "right", size, ...props}: IDrawerProps) => {
    const ref = useRef(null);
    const cs = classNames(styles.Drawer, props.className, {
        [styles.Show]: props.show,
        [styles[placement]]: placement,
        [styles[size]]: size,
    });

    useOnClickOutside(ref, () => {
        props.onHide?.();
    })

    useEffect(() => {
        props.onShow?.();
    }, [])

    return (
        <Overlay show={props.show}>
            <div ref={ref} className={cs} style={props.style}>
                {props.children}
            </div>
        </Overlay>
    )
}