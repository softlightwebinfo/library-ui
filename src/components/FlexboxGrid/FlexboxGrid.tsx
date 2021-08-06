import React from "react";
import { IFlexboxGridProps } from "../../props/IFlexboxGridProps";
import classNames from "classnames";
import styles from '../../sass/modules/FlexboxGrid.module.scss';
import { ContextFlexboxGrid } from "../../context/useFlexboxGrid";

export const FlexboxGrid = ({ align = "top", justify = "start", ...props }: IFlexboxGridProps) => {
  const cs = classNames(styles.FlexboxGrid, props.className, {
    [styles[`align-${ align }`]]: !!align,
    [styles[`justify-${ justify }`]]: !!justify,
    [styles.SpacingBottom]: props.spacingBottom,
  });

  const value = {
    gap: props.gap,
    flexboxGrid: true,
  };

  return (
    <ContextFlexboxGrid.Provider value={ value }>
      <div
        className={ cs }
        style={ {
          ...props.style,
          margin: props.gap ? (props.gap ?? 0) * -1 : undefined,
        } }
      >
        { props.children }
      </div>
    </ContextFlexboxGrid.Provider>
  );
};
