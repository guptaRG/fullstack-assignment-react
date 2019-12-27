import { ALERT_CONSTANTS } from '../constants';

const success = (message:String) => {
    return { type: ALERT_CONSTANTS.SUCCESS, message };
}

const error = (message:String) => {
    return { type: ALERT_CONSTANTS.ERROR, message };
}

const clear = () => {
    return { type: ALERT_CONSTANTS.CLEAR };
}

export default {
    success,
    error,
    clear
};
