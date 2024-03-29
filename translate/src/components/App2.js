import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class App2 extends Component {
    constructor(props){
        super(props);

        this.state = {gifts: []};
    }

    addGift = () => {
        const {gifts} = this.state;

        const ids = this.state.gifts.map(gift => gift.id);

        const max_id = ids.length > 0 ? Math.max(...ids) : 0;

        gifts.push({ id: max_id + 1});

        this.setState({gifts});
    }

    render(){
        return(
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">
                    {
                        this.state.gifts.map(gift => {
                            return (
                                <div key={gift.id}></div>
                            )
                        })
                    }
                </div>
                <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App2;