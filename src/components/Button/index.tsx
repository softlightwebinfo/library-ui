import React from "react";
import {IButtonProps} from "../../props/IButtonProps";
import classNames from "classnames";
import styles from '../../sass/modules/Button.module.scss';

export const Button = (
    {
        disabled = false,
        loading = false,
        style = {},
        appearance,
        size,
        circle,
        ...props
    }: IButtonProps
) => {
    const {} = props;

    const classes = classNames(styles.Button, {
        [styles[`Button--${appearance}`]]: !!styles[`Button--${appearance}`],
        [styles[`Button--${size}`]]: !!styles[`Button--${size}`],
        [styles[`Button--circle`]]: circle,
        [styles[`Button--icon`]]: !!props.icon && !props.children,
    });

    return (
        <button
            disabled={disabled || loading}
            className={classes}
            style={style}
            onClick={props.onClick}
        >
            {props.icon && (<span className={styles["Button__icon"]}>{props.icon}</span>)}
            {props.children}
        </button>
    )
};