import * as React from 'react';
import ReactChild from './children';
import { connect } from 'react-redux';
import { mapStateToProps } from '../_Base/mapStateToProps';
import { mapDispatchToProps } from '../_Base/mapDispatchToProps';


interface IParentState {
}

interface IParentProps {
    name?: string;
    age?: number[];
    changename?(): void;
    add?(): void
}

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class ReactParent extends React.Component<IParentProps, IParentState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.age != null ? this.props.age.join(',') : null}</h1>
                <h1>Test React App</h1>
                <ul>
                    {this.props.age ? this.props.age.map((x, index) => { return <li key={index}><ReactChild index={index} /></li> }) : null}
                </ul>
                <button onClick={this.props.changename}>点击我修改内容</button>
                <br />
                <br />
                <button onClick={this.props.add}>点击我增加队列</button>
            </div>
        );
    }
}

