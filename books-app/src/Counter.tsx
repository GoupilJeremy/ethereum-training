import * as React from 'react';


interface Props {
    count: number;
}

interface State {
    count: number;
}


class Counter extends React.Component<Props, State>{
    public state:  State = {
        count : this.props.count
    };


    public render(){
        return (
            <div>
            {this.state.count}
            <button onClick={() =>
                this.setState({count: this.state.count + 1})}>
                increment</button>
            <button onClick={() =>
                this.setState({count: this.state.count - 1})}>
                decrement</button>
            </div>
        )
    }
}

export default Counter;