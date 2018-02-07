import { combineReducers } from "redux";
import { ParentStoreState } from "../StoreState/ParentState";
import { ParentAction } from "../Action/ParentAction";
import { ChildrenStoreState } from "../StoreState/ChildrenState";
import { ChildrenAction } from "../Action/ChildrenAction";

const work = (state: ParentStoreState, action: ParentAction): ParentStoreState => {
    let new_state: ParentStoreState = state ? state : { name: "ggggggg", age: [1, 2, 3] }
    if (action.type == "first-redux") {
        return { name: state.name + "ischanged", age: state.age }
    }
    if (action.type == "add-age") {
        state.age.push(state.age[state.age.length - 1] + 1);
        return { name: state.name, age: state.age.concat() }
    }
    if (action.type == "add-item") {
        let index = action.index || 0;
        state.age[index] = state.age[index] + 1
        return { name: state.name, age: state.age.concat() }
    }
    else {
        return new_state
    }
}

const band = (state: ChildrenStoreState, action: ChildrenAction): ChildrenStoreState => {
    let new_state: ChildrenStoreState = state ? state : { index: 0 }
    return new_state
}


export const reducer = combineReducers<ParentStoreState>({
    work, band
})