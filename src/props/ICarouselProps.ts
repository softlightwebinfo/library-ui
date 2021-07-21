import {IProps} from "../interfaces";
import {TPlacement} from "../types/TPlacement";

export interface ICarouselProps extends IProps {
    active?: number;
    autoplayInterval?: number;
    placement?: TPlacement;
    bar?: boolean;
    autoplay?: boolean;
}