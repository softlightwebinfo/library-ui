import { faCheck } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React, { useCallback } from "react";
import { useCheckbox } from "../../context/useCheckbox";
import { ICheckboxProps } from "../../props/ICheckboxProps";
import styles from '../../sass/modules/Checkbox.module.scss';
import { Icon } from "../Icon";

export const Checkbox = ({ size = "md", ...props }: ICheckboxProps) => {
  const ctx = useCheckbox();
  const name = ctx.name ?? props.name;
  const cs = classNames(styles.Checkbox, props.className, {
    [styles.Checked]: props.checked,
    [styles[size]]: size,
  });
  const onChange = useCallback((e) => {
    props.onChange?.(e.target.checked, props.value, e);
    ctx.onChange?.(e.target.checked, props.value, e);
  }, [props.value]);
  return (
    <label className={ cs } style={ props.style }>
      <input
        onChange={ onChange }
        className={ styles.Input }
        type="checkbox"
        name={ name }
        disabled={ props.disabled }
        readOnly={ props.readOnly }
        checked={ props.checked }
      />
      <span>
        <Icon icon={ faCheck } className={ styles.Icon }/>
        { props.children }
      </span>
    </label>
  );
};
