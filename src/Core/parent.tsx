import * as React from 'react';
import ReactChild from './children';
import { connect } from 'react-redux';
import { mapStateToProps } from '../_Base/mapStateToProps';
import { mapDispatchToProps } from '../_Base/mapDispatchToProps';


interface IParentState {
}

export interface IParentProps {
    name: string;
    age: number;
    changename(): void;
}

class ReactParent extends React.Component<IParentProps, IParentState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>Test React App</h1>
                <button onClick={this.props.changename}>点击我修改内容</button>
                <ReactChild />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactParent)