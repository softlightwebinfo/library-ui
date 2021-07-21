import classNames from "classnames";
import React, {useEffect, useMemo, useState} from "react";
import {ICarouselProps} from "../../props/ICarouselProps";
import styles from '../../sass/modules/Carousel.module.scss';
import {Dot} from "../Dot";
import {useHover} from "@codeunic/library-hooks";

export const Carousel = ({placement = "bottom", autoplayInterval = 4000, active = 0, ...props}: ICarouselProps) => {
    const [show, setActive] = useState(active);
    const [ref, currentHover]: any = useHover();

    const cs = classNames(styles.Carousel, props.className, {
        [styles[placement]]: placement,
    });

    const count = useMemo(() => React.Children.count(props.children), [props.children]);
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentHover) return;
            setActive(prev => (prev + 1) % count);
        }, autoplayInterval);
        return () => clearInterval(interval);
    }, [props.autoplay, currentHover])

    return (
        <div className={cs} style={props.style} ref={ref}>
            <div className={styles.Content}>
                {React.Children.map(props.children, (child, index) => {
                    if (show != index) return null;
                    return child;
                })}
            </div>
            <div className={styles.Toolbar}>
                {React.Children.map(props.children, (_, index) => (
                    <Dot
                        vertical={["left", "right"].includes(placement)}
                        bar={props.bar}
                        hover
                        active={index === show}
                        onClick={() => setActive(index)}
                        default
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}