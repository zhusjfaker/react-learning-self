import { Dispatch } from "react-redux";
import { ParentAction } from "../Action/ParentAction";

export const mapDispatchToProps = (dispatch: Dispatch<ParentAction>, ownProps: any) => {
    return {
        changename: () => dispatch({ type: "first-redux" }),
        add: () => dispatch({ type: "add-age" })
    };
}


export const mapDispatchToProps_child = (dispatch: Dispatch<ParentAction>, ownProps: any) => {
    return {
        add: () => {
            dispatch({ type: "add-item", index: ownProps.index })
        }
    };
}