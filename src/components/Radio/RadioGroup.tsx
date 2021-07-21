import classNames from "classnames";
import React from "react";
import styles from '../../sass/modules/RadioGroup.module.scss';
import {IRadioGroupProps} from "../../props/IRadioGroupProps";
import {ContextRadio} from "../../context/useRadio";

export const RadioGroup = (props: IRadioGroupProps) => {
    const cs = classNames(styles.RadioGroup, props.className, {
        [styles.Horizontal]: props.horizontal,
    });
    const value = {
        name: props.name,
        radio: true,
        onChange: props.onChange,
    }
    return (
        <ContextRadio.Provider value={value}>
            <div className={cs} style={props.style}>
                {props.children}
            </div>
        </ContextRadio.Provider>
    )
}