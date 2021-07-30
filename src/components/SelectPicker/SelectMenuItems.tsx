import React from "react";
import { useSelectPicker } from "../../context/useSelectPicker";
import { ISelectMenuItemProps } from "../../props/ISelectMenuItemProps";
import { SelectItem } from "./SelectItem";

export const SelectMenuItems = (props: ISelectMenuItemProps) => {
  const cx = useSelectPicker();
  if (cx.groupBy) {
    return null;
  }
  const data = props.data ?? cx.data;
  return (
    <>
      { data.map((item, index) => {
        return (
          <SelectItem { ...item } item={ item } key={ index }/>
        );
      }) }
    </>
  );
};
