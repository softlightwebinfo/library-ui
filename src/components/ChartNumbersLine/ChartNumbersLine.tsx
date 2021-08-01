import classNames from "classnames";
import React, { useMemo } from "react";
import { IChartNumbersLineProps } from "../../props/IChartNumbersLineProps";
import styles from '../../sass/modules/ChartNumbersLine.module.scss';

export const ChartNumbersLine = (props: IChartNumbersLineProps) => {
  const cs = classNames(styles.ChartNumbersLine, props.className, {});
  const daysRows = useMemo(() => {
    return [...new Array(props.days)];
  }, [props.days]);
  return (
    <div className={ cs } style={ props.style }>
      { daysRows.map((_, index) => {
        const value = props.data?.[index+1];
        return (
          <div className={ styles.Column }>
            <div className={ styles.Line } style={ { height: `${ value?.value ?? 0 }%`, background: value?.color } }>
              <span className={ styles.Legend }>{ ++index }</span>
              <span className={ styles.Value }>{ value?.label }</span>
            </div>
          </div>
        );
      }) }
    </div>
  );
};
