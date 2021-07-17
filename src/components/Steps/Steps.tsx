import React from "react";
import classNames from "classnames";
import styles from '../../sass/modules/Steps.module.scss';
import {IStepsProps} from "../../props/IStepsProps";

export const Steps = ({className, style, ...props}: IStepsProps) => {
    const cs = classNames(styles.Steps, className);
    const current = props.current;
    return (
        <div className={cs} style={style}>
            {React.Children.map(props.children, (child: any, index) => (
                React.cloneElement(child, {
                    key: index,
                    index: index + 1,
                    finish: (index + 1) <= (current ?? 1),
                    finishNext: current === index,
                })
            ))}
        </div>
    );
};