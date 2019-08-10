import React from 'react';
import App from './App';
import {
    render,
    getByText,
    cleanup,
} from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

describe('App', function() {
    afterEach(cleanup);

    test('renders without crashing', async () => {
        const   app = (<App fetchData={false}/>);

        const {container} = render(app);

        getByText(container, 'Lottery Contract', {exact: false});
    });
});