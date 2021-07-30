import { useToggle } from "@codeunic/library-hooks";
import { faChevronDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React from "react";
import { useSelectPicker } from "../../context/useSelectPicker";
import { ISelectMenuDropdownProps } from "../../props/ISelectMenuDropdownProps";
import styles from '../../sass/modules/SelectMenuDropdown.module.scss';
import { Icon } from "../Icon/Icon";
import { Item } from "../Item/Item";

export const SelectMenuDropdown = (props: ISelectMenuDropdownProps) => {
  const cx = useSelectPicker();

  const [show, { toggle }] = useToggle(true);
  const cs = classNames(styles.SelectMenuDropdown, props.className, {});

  const HeaderItem = () => (
    <>
      { props.label }
    </>
  );

  return (
    <div className={ cs } style={ props.style }>
      <Item onClick={ toggle } className={ styles.Item }>
        { cx?.renderMenuGroup?.(props.label, {
          component: HeaderItem,
          children: props.children,
          props,
        }) ?? <HeaderItem/> }
        <Icon icon={ show ? faChevronDown : faChevronLeft }/>
      </Item>
      { show && (props.children) }
    </div>
  );
};
