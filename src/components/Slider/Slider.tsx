import classNames from "classnames";
import React from "react";
import { ISliderProps } from "../../props/ISliderProps";
import styles from '../../sass/modules/Slider.module.scss';

export const Slider = (props: ISliderProps) => {
  const cs = classNames(styles.Slider, props.className, {});
  const onChange = (evt: any) => {
    props?.onChange?.(evt.targe.value, evt);
    props?.onChangeEvent?.(evt);
  };
  return (
    <input
      onChange={ onChange }
      type={ "range" }
      className={ cs }
      style={ props.style }
      defaultValue={ props.defaultValue }
    />
  );
};
