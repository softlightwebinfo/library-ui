import React from "react"
import classNames from "classnames";
import styles from '../../sass/modules/DrawerBody.module.scss';
import {IDrawerBodyProps} from "../../props/IDrawerBodyProps";

export const DrawerBody = (props: IDrawerBodyProps) => {
    const cs = classNames(styles.DrawerBody, props.className, {});
    return (
        <section className={cs} style={props.style}>
            <div className={styles.Content}>
                {props.children}
            </div>
        </section>
    )
}