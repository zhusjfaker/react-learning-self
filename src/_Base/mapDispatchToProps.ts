import { Dispatch } from "react-redux";
import { ParentAction } from "../Action/ParentAction";

export const mapDispatchToProps = (dispatch: Dispatch<ParentAction>, ownProps: any) => {
    return {
        changename: () => dispatch({ type: "first-redux" })
    };
}