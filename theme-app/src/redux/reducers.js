import { TOGGLE_DARKTHEME, actions } from "./actions";
import { combineReducers } from "redux";

const preferences = (state = { darkThemeEnabled: false }, action) => {
    switch (actions.type) {
        case TOGGLE_DARKTHEME:
            return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
        default:
            return state;
    }
};

export default combineReducers({ preferences });
