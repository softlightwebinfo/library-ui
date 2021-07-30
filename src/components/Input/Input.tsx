import React, { useCallback } from "react";
import { IInputProps } from "../../props/IInputProps";
import classNames from "classnames";
import styles from '../../sass/modules/Input.module.scss';

export const Input = ({ type = "text", ...props }: IInputProps) => {
  const cs = classNames(styles.Input, props.className, {
    [styles[props.size ?? "md"]]: !!props.size,
    [styles.Dark]: props.dark,
  });
  const onChange = useCallback((evt) => {
    props?.onChange?.(evt.target.value, evt);
    props?.onChangeEvent?.(evt);
  }, [props.value, props.onChange]);
  return (
    <input
      id={ props.id }
      className={ cs }
      style={ props.style }
      disabled={ props.disabled }
      readOnly={ props.readonly }
      defaultValue={ props.defaultValue }
      value={ props.value }
      type={ type }
      onChange={ onChange }
      placeholder={ props.placeholder }
      checked={ props.checked }
      required={ props.required }
      min={ props.min }
      max={ props.max }
      step={ props.step }
      autoFocus={ props.autoFocus }
      minLength={ props.minLength }
      maxLength={ props.maxLength }
      multiple={ props.multiple }
    />
  );
};
