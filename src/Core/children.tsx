import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps_child } from '../_Base/mapStateToProps';
import { mapDispatchToProps_child } from '../_Base/mapDispatchToProps';

interface IChildState {
}

export interface IChildProps {
    list?: number[];
    index: number;
    add?(index: number): void;
}


@(connect(mapStateToProps_child, mapDispatchToProps_child) as any)
export default class ReactChild extends React.Component<IChildProps, IChildState> {

    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Children Dom {this.props.list != null ? this.props.list[this.props.index] : null}</h2>
                <button onClick={() => { this.props.add != null ? this.props.add(this.props.index) : null }}>相加</button>
            </div>
        );
    }
}
