import classNames from "classnames";
import React from "react";
import { useSelectPicker } from "../../context/useSelectPicker";
import { ISelectItemProps } from "../../props/ISelectItemProps";
import { Item } from "../Item/Item";
import styles from '../../sass/modules/SelectItem.module.scss';

export const SelectItem = (props: ISelectItemProps) => {
  const cx = useSelectPicker();

  const cs = classNames(styles.SelectItem, props.className, {
    [styles.SubItem]: props.subItem,
    [styles.Select]:cx.select
  });

  const onClick = () => {
    cx?.onSelect?.(props.value, props.item);
    props?.onSelect?.(props.value, props.item);
  };
  const Content = (_pr: any) => {
    return (
      <>
        { props.label }
      </>
    );
  };
  return (
    <Item onClick={ onClick } className={ cs } style={ props.style }>
      { cx?.renderMenuItem?.(props.label, Content) ?? <Content/> }
    </Item>
  );
};
