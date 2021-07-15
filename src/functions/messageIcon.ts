import {TTypeBasic} from "../types/TTypeBasic";
import {faCheck, faExclamationTriangle, faInfo, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

export const messageIcon = (type: TTypeBasic) => {
    switch (type) {
        case "info":
            return faInfo;
        case "success":
            return faCheck;
        case "warning":
            return faExclamationTriangle;
        case "error":
            return faTimesCircle;
    }
};