import classNames from "classnames";
import React from "react";
import styles from '../../sass/modules/RadioGroup.module.scss';
import {ContextCheckbox} from "../../context/useCheckbox";
import {ICheckboxGroupProps} from "../../props/ICheckboxGroupProps";

export const CheckboxGroup = (props: ICheckboxGroupProps) => {
    const cs = classNames(styles.RadioGroup, props.className, {
        [styles.Horizontal]: props.horizontal,
    });
    const value = {
        name: props.name,
        checkbox: true,
        onChange: props.onChange,
    }
    return (
        <ContextCheckbox.Provider value={value}>
            <div className={cs} style={props.style}>
                {props.children}
            </div>
        </ContextCheckbox.Provider>
    )
}