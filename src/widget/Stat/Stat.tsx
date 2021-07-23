import classNames from "classnames";
import React from "react";
import { Description, Dot, Line, Title } from "../../components";
import { Price } from "../../components/Price/Price";
import { IStatProps } from "../../props/IStatProps";
import styles from '../../sass/modules/Stat.module.scss';

export const Stat = (props: IStatProps) => {
  const cs = classNames(styles.Stat, props.className, {});
  return (
    <div className={ cs } style={ props.style }>
      <Title className={ styles.Title }>
        { props.dot && (<Dot default/>) }
        { props.title }
      </Title>
      <Description className={ styles.Description }>{ props.subTitle }</Description>
      { props.price && (
        <Price className={ styles.Price }>{ props.price }</Price>
      ) }
      { (props.topLeftText || props.topRightText) && (
        <div className={ styles.Group }>
          <span>{ props.topLeftText }</span>
          <span>{ props.topRightText }</span>
        </div>
      ) }
      <Line showInfo={ false } className={ styles.Line } percent={ props.percent }/>
      { (props.bottomLeftText || props.bottomRightText) && (
        <div className={ styles.Group }>
          <span>{ props.bottomLeftText }</span>
          <span>{ props.bottomRightText }</span>
        </div>
      ) }
    </div>
  );
};
