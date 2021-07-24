import {IProps} from "../interfaces";
import {TPlacement, TSize} from "../types";

export interface IDrawerProps extends IProps {
    onEnter?: () => void;//Callback fired before the Drawer transitions in
    onEntered?: () => void;//Callback fired after the Drawer finishes transitioning in
    onEntering?: () => void;//Callback fired as the Drawer begins to transition in
    onExit?: () => void;//Callback fired right before the Drawer transitions out
    onExited?: () => void;//Callback fired after the Drawer finishes transitioning out
    onExiting?: () => void;//Callback fired as the Drawer begins to transition out
    onHide?: () => void;//Callback fired when Drawer hide
    onShow?: () => void;//Callback fired when Drawer display
    show?: boolean;
    full?: boolean;
    gray?: boolean;
    placement?: TPlacement;
    size?: TSize;
}
