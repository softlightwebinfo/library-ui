import classNames from "classnames";
import React from "react";
import {IRadioProps} from "../../props/IRadioProps";
import styles from '../../sass/modules/Radio.module.scss';

export const Radio = (props: IRadioProps) => {
    const cs = classNames(styles.Radio, props.className, {
        [styles.Checked]: props.checked,
    });
    return (
        <label className={cs} style={props.style}>
            <input
                onChange={e => props.onChange?.(e.target.checked, props.value, e)}
                className={styles.Input}
                type="radio"
                checked={props.checked}
            />
            <span>{props.children}</span>
        </label>
    )
}