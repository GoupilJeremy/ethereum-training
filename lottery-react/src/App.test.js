import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { noop } from 'lodash';
// import react-testing methods
import {
    render,
} from '@testing-library/react'
import web3 from "./web3";

test('renders without crashing', async () => {
    const app = render(<App/>);
    const expected =  (<>
        <h2> Lottery Contract </h2>
        <p>This
            contract
            is
            managed
            by ''
            .
            There
            are
            currently
            0
            people
            entered,
            competing
            to
            win
            0
            ether
            !
        </p>
        <hr/>
        <form onSubmit={() => noop}>
            <h4> Want
                to
                try
                your
                luck ?
            </h4>
            <div>
                <label> Amount
                    of
                    ether
                    to
                    enter </label>
                <input
                    value={''}
                    onChange={event => noop
                    }
                />
            </div>
            <button> Enter </button>
        </form>
        <hr/>
        <h4> Ready
            to
            pick
            a
            winner ?
        </h4>
        <button onClick={() => noop}> Pick a winner ! </button>
        <hr/>
        <h1>''</h1>
    </>);

    expect(app).toBe(expected);
});
