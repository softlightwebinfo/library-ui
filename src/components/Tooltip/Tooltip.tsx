import React from "react";
import {ITooltipProps} from "../../props/ITooltipProps";

export const Tooltip = (props: ITooltipProps) => {
    return (
        <>
            {props.children}
        </>
    );
}