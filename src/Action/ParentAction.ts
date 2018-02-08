import * as axios from 'axios'
export class ParentAction {
    type: string;
    index?: number;
}


export const fetchPosts = (count: number) => {
    return (dispatch: any, getState: any) => {
        debugger
        dispatch({ type: "add-item", index: count });
        return axios.default.get('/mock/user.json').then((res: axios.AxiosResponse<any>) => {
            if (res.status == 200) {
                debugger
                dispatch({ type: "add-item", index: count + 1 });
            }
        })
    }
};