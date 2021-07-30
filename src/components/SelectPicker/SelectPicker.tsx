import { useOnClickOutside, useToggle } from "@codeunic/library-hooks";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React, { useMemo, useRef, useState } from "react";
import { ContextSelectPicker } from "../../context/useSelectPicker";
import { ISelectPickerData, ISelectPickerProps } from "../../props/ISelectPickerProps";
import styles from '../../sass/modules/SelectPicker.module.scss';
import { Button } from "../Button";
import { Icon } from "../Icon";
import { SelectMenu } from "./SelectMenu";
import { SelectMenuItems } from "./SelectMenuItems";
import { SelectMenuItemsGroup } from "./SelectMenuItemsGroup";
import { SelectNoResults } from "./SelectNoResults";

export const SelectPicker = ({ showSearch = true, ...props }: ISelectPickerProps) => {
  const ref = useRef(null);
  const [show, { toggle, off }] = useToggle(props.initialOpen);
  const [search, setSearch] = useState("");
  const cs = classNames(styles.SelectPicker, props.className, {});
  const [select, setSelect] = useState<ISelectPickerData>();

  useOnClickOutside(ref, off);

  const data = useMemo(() => {
    const group = () => {
      if (!search) return props.data;
      return props.data.filter(item => {
        return item.value.toLowerCase().trim().includes(search);
      });
    };

    if (!props.groupBy) {
      return group();
    }

    return group().reduce((previousValue, currentValue) => {
      // @ts-ignore
      if (!previousValue[currentValue[props.groupBy]]) {
        // @ts-ignore
        previousValue[currentValue[props.groupBy]] = [];
      }
      // @ts-ignore
      previousValue[currentValue[props.groupBy]].push(currentValue);
      return previousValue;
    }, {});

  }, [search, props.groupBy]);

  const value = {
    groupBy: props.groupBy,
    isSelect: true,
    showSearch,
    data,
    search,
    select,
    setSearch,
    renderMenuItem: props.renderMenuItem,
    renderMenuGroup: props.renderMenuGroup,
    renderValue: props.renderValue,
    onSelect: (value: string, item: any) => {
      props?.onSelect?.(value, item);
      off();
      setSelect(item);
    },
  };

  const Content = () => {
    return (
      <>
        <span>{ props.placeholder ?? "Select" }</span>
        <Icon className={ styles.Icon } icon={ show ? faChevronUp : faChevronDown }/>
      </>
    );
  };
  return (
    <ContextSelectPicker.Provider value={ value }>
      <div ref={ ref } className={ cs } style={ props.style }>
        <Button { ...props.button } onClick={ toggle } className={ styles.Button } style={ props.styleButton }>
          { (select && props.renderValue) ? props.renderValue?.(select?.label, select, Content) : <Content/> }
        </Button>
        { show && (
          <SelectMenu>
            <SelectNoResults/>
            <SelectMenuItems/>
            <SelectMenuItemsGroup/>
          </SelectMenu>
        ) }
      </div>
    </ContextSelectPicker.Provider>
  );
};
