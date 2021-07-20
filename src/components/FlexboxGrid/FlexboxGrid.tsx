import React from "react"
import {IFlexboxGridProps} from "../../props/IFlexboxGridProps";
import classNames from "classnames";
import styles from '../../sass/modules/FlexboxGrid.module.scss';

export const FlexboxGrid = ({align = "top", justify = "start", ...props}: IFlexboxGridProps) => {
    const cs = classNames(styles.FlexboxGrid, props.className, {
        [styles[`align-${align}`]]: !!align,
        [styles[`justify-${justify}`]]: !!justify
    });

    return (
        <div className={cs} style={props.style}>
            {props.children}
        </div>
    )
}