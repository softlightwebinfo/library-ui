import { useOnClickOutside, useToggle } from "@codeunic/library-hooks";
import { faChevronDown, faChevronUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ContextTagPicker } from "../../context/useTagPicker";
import { ITagPickerProps } from "../../props/ITagPickerProps";
import { ITagData } from "../../props/ITagsProps";
import styles from '../../sass/modules/TagPicker.module.scss';
import { Icon } from "../Icon";
import { ItemBox } from "../Item/ItemBox";
import { PickerMenu } from "../PickerMenu/PickerMenu";
import { TagPickerMenuItems } from "../PickerMenu/TagPickerMenuItems";
import { Tags } from "../Tag/Tags";

export const TagPicker = ({ placeholder = "Select", ...props }: ITagPickerProps) => {
  const [show, { toggle, off }] = useToggle(props.initialOpen);
  const [tags, setTags] = useState<ITagData[]>([]);

  const cs = classNames(styles.TagPicker, props.className, {
    [styles.Block]: props.block,
  });
  const ref = useRef(null);

  useOnClickOutside(ref, off);

  const onDelete = (evt: any) => {
    evt.stopPropagation();
    setTags([]);
    off();
  };

  useEffect(() => props?.onChange?.(tags), [tags]);

  const value = {
    tags,
    block: props.block,
    selectTags: useMemo(() => tags.map(r => r.value), [tags]),
    name: props.name ?? "checkbox",
    data: props.data,
    onChange: (check: boolean, item: ITagData) => {
      if (!check) {
        setTags(prv => prv.filter(pp => pp.value !== item.value));
        return;
      }
      setTags(prv => [...prv, item]);
    },
  };

  const onClose = (data: ITagData, index: number, evt: any) => {
    evt.stopPropagation();
    setTags(prv => prv.filter(pp => pp.value !== data.value));
  };

  return (
    <ContextTagPicker.Provider value={ value }>
      <div ref={ ref } className={ cs } style={ props.style }>
        <ItemBox className={ styles.ItemBox } appearance={ props.appearanceButton } onClick={ toggle }
                 style={ props.styleButton }>
          <div className={ styles.Button }>
            { !!tags.length && <Tags onClose={ onClose } tags={ tags }/> }
            { !tags.length && placeholder }
          </div>
          <div className={ styles.Icons }>
            { !!tags.length && <Icon onClick={ onDelete } icon={ faTimes }/> }
            <Icon className={ styles.Icon } icon={ show ? faChevronUp : faChevronDown }/>
          </div>
        </ItemBox>
        { show && (
          <PickerMenu block={ props.block }>
            <TagPickerMenuItems/>
          </PickerMenu>
        ) }
      </div>
    </ContextTagPicker.Provider>
  );
};
