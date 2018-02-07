
export const mapStateToProps = (state: any): any => {
    return {
        name: state.work.name,
        age: state.work.age
    }
}


export const mapStateToProps_child = (state: any): any => {
    return {
        list: state.work.age
    }
}