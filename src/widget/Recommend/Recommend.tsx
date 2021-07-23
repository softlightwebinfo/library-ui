import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Button, ButtonToolbar, Footer } from "../../components";
import { IRecommendProps } from "../../props/IRecommendProps";
import styles from '../../sass/modules/Recommend.module.scss';

export const Recommend = ({ maxNumbers = 10, ...props }: IRecommendProps) => {
  const [active, setActive] = useState(props.defaultValue);
  const cs = classNames(styles.Recommend, props.className);

  useEffect(() => {
    setActive(props.defaultValue);
  }, [props.defaultValue]);

  return (
    <div className={ cs } style={ props.style }>
      <p>{ props.title }</p>
      <p>{ props.description }</p>

      <ButtonToolbar className={ styles.Buttons }>
        { [...new Array(maxNumbers + 1)].map((_, index) => (
          <Button
            appearance={ active === index ? "primary" : undefined }
            circle={ props.circle }
            key={ index }
            onClick={ (e) => {
              props?.onClick?.(index, e);
              setActive(index);
            } }
          >
            { index }
          </Button>
        )) }
      </ButtonToolbar>

      <div className={ styles.Toolbar }>
        <div>{ props.left }</div>
        <div>{ props.right }</div>
      </div>
      <Footer className={ styles.Footer } onClick={ props.onClickFooter }>
        { props.footer }
      </Footer>
    </div>
  );
};
