import classNames from "classnames";
import React, { useCallback } from "react";
import { ITextareaProps } from "../../props/ITextareaProps";
import styles from '../../sass/modules/Textarea.module.scss';

export const Textarea = (props: ITextareaProps) => {
  const cs = classNames(styles.Textarea, props.className, {
    [styles[props.size ?? "md"]]: !!props.size,
    [styles.Dark]: props.dark,
  });

  const onChange = useCallback((evt) => {
    props?.onChange?.(evt.target.value, evt);
    props?.onChangeEvent?.(evt);
  }, [props.value, props.onChange]);

  return (
    <textarea
      className={ cs }
      style={ props.style }
      id={ props.id }
      disabled={ props.disabled }
      readOnly={ props.readonly }
      defaultValue={ props.defaultValue }
      value={ props.value }
      onChange={ onChange }
      placeholder={ `${ props.placeholder }${ props.required ? "*" : "" }` }
      required={ props.required }
      autoFocus={ props.autoFocus }
      minLength={ props.minLength }
      maxLength={ props.maxLength }
    />
  );
};
