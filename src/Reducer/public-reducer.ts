import { combineReducers } from "redux";
import { ParentStoreState } from "../StoreState/ParentState";
import { ParentAction } from "../Action/ParentAction";

const work = (state: ParentStoreState, action: ParentAction): ParentStoreState => {
    let new_state: ParentStoreState = state ? state : { name: "ggggggg" }
    if (action.type == "first-redux") {
        return { name: state.name + "ischanged" }
    }
    else {
        return new_state
    }
}

const band = (state: ParentStoreState, action: ParentAction): ParentStoreState => {
    let new_state: ParentStoreState = state ? state : { name: "ggggggg" }
    return new_state
}


export const reducer = combineReducers<ParentStoreState>({
    work,band
})