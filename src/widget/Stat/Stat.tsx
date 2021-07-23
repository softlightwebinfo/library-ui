import classNames from "classnames";
import React from "react";
import { LineStat } from "../../components/LineStat/LineStat";
import { Price } from "../../components/Price/Price";
import { TitleDescription } from "../../components/TitleDescription/TitleDescription";
import { IStatProps } from "../../props/IStatProps";
import styles from '../../sass/modules/Stat.module.scss';

export const Stat = (props: IStatProps) => {
  const cs = classNames(styles.Stat, props.className, {
    [styles.Center]: props.center,
  });
  return (
    <div className={ cs } style={ props.style }>
      <TitleDescription
        center={ props.center }
        description={ props.subTitle }
        title={ props.title }
        dot={ props.dot }
      />
      { props.price && (
        <Price className={ styles.Price }>{ props.price }</Price>
      ) }
      <LineStat
        topLeftText={ props.topLeftText }
        topRightText={ props.topRightText }
        bottomLeftText={ props.bottomLeftText }
        bottomRightText={ props.bottomRightText }
        percent={ props.percent }
      />
    </div>
  );
};
