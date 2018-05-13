import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
}  from "../actions/types";

export default function (state = {}, actions) {
    switch (actions.type){
        case FACEBOOK_LOGIN_SUCCESS:
            return{ token: actions.payload };
        case FACEBOOK_LOGIN_FAIL:
            return { token: null };
        default:
            return state;
    }
}