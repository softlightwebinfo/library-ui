import classNames from "classnames";
import React from "react";
import { ILineStatProps } from "../../props/ILineStatProps";
import styles from "../../sass/modules/LineStat.module.scss";
import { Line } from "../Line";

export const LineStat = (props: ILineStatProps) => {
  const cs = classNames(styles.LineStat, props.className, {});
  return (
    <div className={ cs } style={ props.style }>
      { (props.topLeftText || props.topRightText) && (
        <div className={ styles.Group }>
          <span>{ props.topLeftText }</span>
          <span>{ props.topRightText }</span>
        </div>
      ) }
      { props.percent !== undefined && (
        <Line showInfo={ false } className={ styles.Line } percent={ props.percent }/>
      ) }
      { (props.bottomLeftText || props.bottomRightText) && (
        <div className={ styles.Group }>
          <span>{ props.bottomLeftText }</span>
          <span>{ props.bottomRightText }</span>
        </div>
      ) }
    </div>
  );
};
