import { combineReducers } from "redux";


const initalState = {}

const App = (state = initalState, action: any) => {
    switch (action.type) {
        default: return state;
    }
}

export default combineReducers({
    App,
});