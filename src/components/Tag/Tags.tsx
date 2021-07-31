import classNames from "classnames";
import React from "react";
import { ITagsProps } from "../../props/ITagsProps";
import { Tag } from "./Tag";
import { TagGroup } from "./TagGroup";
import styles from '../../sass/modules/Tags.module.scss';

export const Tags = (props: ITagsProps) => {
  const cs = classNames(styles.Tags, props.className, {});
  return (
    <TagGroup className={ cs } style={ props.style }>
      { props.tags.map((value, index) => (
        <Tag
          appearance={props.appearance}
          onClose={ evt => props.onClose?.(value, index, evt) }
          key={ index }
          closeable
          color={ value?.color }
        >
          { value.label }
        </Tag>
      )) }
    </TagGroup>
  );
};
