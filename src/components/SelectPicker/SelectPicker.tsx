import { useOnClickOutside } from "@codeunic/library-hooks";
import { faChevronDown, faChevronUp, faTimes } from "@fortawesome/free-solid-svg-icons";
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
  const [show, setToggle] = useState(props.initialOpen);
  const [search, setSearch] = useState("");
  const cs = classNames(styles.SelectPicker, props.className, {
    [styles.Block]: props.block,
  });

  const [select, setSelect] = useState<ISelectPickerData>(props.initialSelect);

  useOnClickOutside(ref, () => setToggle(false));

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

  }, [search, props.groupBy, props.data]);

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
    block: props.block,
    onSelect: (value: string, item: any) => {
      props?.onSelect?.(value, item);
      setToggle(false);
      setSelect(item);
    },
  };
  const toggle = () => setToggle(prv => !prv);
  const Content = () => {
    return (
      <>
        <span>{ select ? select.label : props.placeholder ?? "Select" }</span>
      </>
    );
  };

  const onDelete = (evt: { stopPropagation: () => void; }) => {
    evt.stopPropagation();
    // @ts-ignore
    setSelect(undefined);
    props?.onSelect?.("", null);
  };

  const valueSelect = select ? props.renderValue?.(select?.label, select, Content) ?? <Content/> : <Content/>;
  return (
    <ContextSelectPicker.Provider value={ value }>
      <div ref={ ref } className={ cs } style={ props.style }>
        <Button
          { ...props.button }
          block={ props.block }
          onClick={ toggle }
          className={ styles.Button }
          style={ props.styleButton }
        >
          { valueSelect }
          <div className={ styles.RightIcon }>
            { select && <Icon onClick={ onDelete } icon={ faTimes }/> }
            <Icon className={ styles.Icon } icon={ show ? faChevronUp : faChevronDown }/>
          </div>
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
