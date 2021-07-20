import React from "react"
import {IFlexboxGridItemProps} from "../../props/IFlexboxGridItemProps";
import classNames from "classnames";
import styles from '../../sass/modules/FlexboxGridItem.module.scss';

export const FlexboxGridItem = (props: IFlexboxGridItemProps) => {
    const cs = classNames(styles.FlexboxGridItem, props.className, {
        [styles[`order-${props.order}`]]: !!props.order,
        [styles[`col-${props.colspan}`]]: !!props.colspan,
        [styles[`col-xs-${props.xs}`]]: !!props.xs,
        [styles[`col-sm-${props.sm}`]]: !!props.sm,
        [styles[`col-md-${props.md}`]]: !!props.md,
        [styles[`col-lg-${props.lg}`]]: !!props.lg,
        [styles[`col-xl-${props.xl}`]]: !!props.xl,
    });
    return (
        <div className={cs} style={props.style}>
            {props.children}
        </div>
    )
}