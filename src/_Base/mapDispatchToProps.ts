import { Dispatch } from "react-redux";
import { ParentAction, fetchPosts } from "../Action/ParentAction";

export const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
    return {
        changename: () => dispatch({ type: "first-redux" }),
        add: () => dispatch({ type: "add-age" }),
        async_add:()=>dispatch(fetchPosts(1))
    };
}


export const mapDispatchToProps_child = (dispatch: Dispatch<ParentAction>, ownProps: any) => {
    return {
        add: () => {
            dispatch({ type: "add-item", index: ownProps.index })
        }
    };
}