import classNames from "classnames";
import React, {useCallback} from "react";
import {IRadioProps} from "../../props/IRadioProps";
import styles from '../../sass/modules/Radio.module.scss';
import {useRadio} from "../../context/useRadio";

export const Radio = (props: IRadioProps) => {
    const ctx = useRadio()
    const name = ctx.name ?? props.name;
    const cs = classNames(styles.Radio, props.className, {
        [styles.Checked]: props.checked,
    });
    const onChange = useCallback((e) => {
        props.onChange?.(e.target.checked, props.value, e)
        ctx.onChange?.(e.target.checked, props.value, e)
    }, [props.value]);
    return (
        <label className={cs} style={props.style}>
            <input
                onChange={onChange}
                className={styles.Input}
                type="radio"
                name={name}
                disabled={props.disabled}
                readOnly={props.readOnly}
                checked={props.checked}
            />
            <span>{props.children}</span>
        </label>
    )
}