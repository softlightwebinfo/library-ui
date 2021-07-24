import React, {useEffect, useRef} from "react"
import {IDrawerProps} from "../../props/IDrawerProps";
import classNames from "classnames";
import styles from '../../sass/modules/Drawer.module.scss';
import {Overlay} from "../Overlay";
import {useOnClickOutside} from "@codeunic/library-hooks";
import {ContextDrawer} from "../../context/useDrawer";

export const Drawer = ({placement = "right", size = "sm", ...props}: IDrawerProps) => {
    const ref = useRef(null);
    const cs = classNames(styles.Drawer, props.className, {
        [styles.Show]: props.show,
        [styles.Hide]: !props.show,
        [styles.Gray]: props.gray,
        [styles.Full]: props.full,
        [styles[placement]]: placement,
        [styles[size]]: size,
    });

    useOnClickOutside(ref, () => {
        props.onHide?.();
    })

    useEffect(() => {
        props.onShow?.();
    }, [])

    const value = {
        drawer: true,
        placement,
        onHide: props.onHide,
    };

    return (
        <ContextDrawer.Provider value={value}>
            <Overlay show={props.show}>
                <div ref={ref} className={cs} style={props.style}>
                    <div className={styles.Content}>
                        {props.children}
                    </div>
                </div>
            </Overlay>
        </ContextDrawer.Provider>
    )
}
