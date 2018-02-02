import * as React from 'react';

export class ReactChild extends React.Component {

    render() {
        console.log(this.state)
        return(
            <div>
                <h2>Children Dom</h2>
            </div>
        );
    }
}