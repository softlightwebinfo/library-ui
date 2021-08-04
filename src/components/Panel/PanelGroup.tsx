import classNames from "classnames";
import React from "react";
import { IPanelGroupProps } from "../../props/IPanelGroupProps";
import styles from '../../sass/modules/PanelGroup.module.scss';

export const PanelGroup = (props: IPanelGroupProps) => {
  const cs = classNames(styles.PanelGroup, props.className, {
    [styles.Gap]: props.gap,
  });
  return (
    <div className={ cs } style={ {
      ...props.style,
      gap: props.gap,
    } }>
      { props.children }
    </div>
  );
};
