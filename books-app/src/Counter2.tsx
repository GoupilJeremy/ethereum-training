import * as React from 'react';

interface Props {
    count: number;
}

interface State {
    count: number;
}

class Counter2 extends React.Component<Props, State>{
    public state: State = {
        count: this.props.count
    };

    public render () {
        return (
            <div>
                <span>{this.state.count}</span>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Increment
                </button>
            </div>
        )
    }
}

export default Counter2;