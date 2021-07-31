import classNames from "classnames";
import React from "react";
import { useTagPicker } from "../../context/useTagPicker";
import { ITagPickerData, ITagPickerMenuItemsProps } from "../../props/ITagPickerMenuItemsProps";
import styles from '../../sass/modules/TagPickerMenuItems.module.scss';
import { Checkbox, CheckboxGroup } from "../Checkbox";
import { Item } from "../Item";

export const TagPickerMenuItems = (props: ITagPickerMenuItemsProps) => {
  const cx = useTagPicker();
  const data = props.data ?? cx.data ?? [];
  const size = props.size ?? cx.size ?? "sm";
  const name = props.name ?? cx.name ?? "check";
  const cs = classNames(styles.TagPickerMenuItems, props.className, {});
  const onChange = (checked: boolean, item: ITagPickerData) => {
    props?.onChange?.(checked, item);
    cx?.onChange?.(checked, item);
  };
  return (
    <CheckboxGroup name={ name } className={ cs } style={ props.style } onChange={ onChange }>
      { data.map((item, index) => (
        <Item key={ index } className={ styles.Item }>
          <Checkbox
            checked={ cx.selectTags?.includes(item.value) }
            value={ item }
            size={ size }
          >
            { item.label }
          </Checkbox>
        </Item>
      )) }
    </CheckboxGroup>
  );
};
