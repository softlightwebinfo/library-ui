import React, {ForwardedRef, forwardRef} from "react";
import {IButtonProps} from "../../props/IButtonProps";
import classNames from "classnames";
import styles from '../../sass/modules/Button.module.scss';
import {Spinner} from "../Spinner/Spinner";

export const Button = forwardRef((
    {
        disabled = false,
        loading = false,
        style = {},
        appearance,
        size,
        circle,
        block,
        type = "submit",
        ...props
    }: IButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
) => {
    const {} = props;

    const classes = classNames(styles.Button, props.className, {
        [styles[`Button--${appearance}`]]: !!styles[`Button--${appearance}`],
        [styles[`Button--${size}`]]: !!styles[`Button--${size}`],
        [styles[`Button--circle`]]: circle,
        [styles[`Button--block`]]: block,
        [styles[`Button--disabled`]]: disabled || loading,
        [styles[`Button--icon`]]: !!props.icon && !props.children,
    });

    return (
        <button
            type={type}
            title={props.title}
            ref={ref}
            disabled={disabled || loading}
            className={classes}
            style={style}
            onClick={props.onClick}
        >
            {loading && (<Spinner/>)}
            {!loading && props.icon && (<span className={styles["Button__icon"]}>{props.icon}</span>)}
            {!loading && props.children}
        </button>
    )
});