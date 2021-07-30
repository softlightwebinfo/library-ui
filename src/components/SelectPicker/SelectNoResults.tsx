import classNames from "classnames";
import React from "react";
import { useSelectPicker } from "../../context/useSelectPicker";
import { ISelectNoResultsProps } from "../../props/ISelectNoResultsProps";
import styles from '../../sass/modules/SelectNoResults.module.scss';

export const SelectNoResults = (props: ISelectNoResultsProps) => {
  const cx = useSelectPicker();
  const cs = classNames(styles.SelectNoResults, props.className, {});
  if (!!cx.data.length) return null;
  if (cx.groupBy && !!Object.keys(cx.data).length) return null;
  console.log(cx.data);
  return (
    <div className={ cs } style={ props.style }>No results</div>
  );
};
