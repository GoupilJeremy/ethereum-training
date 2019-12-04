import React from 'react';
import { shallow } from 'enzyme';
import App2 from './App2';

describe('App', () => {
    const app = shallow(<App2 />);


    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initializes the state with an empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    it('add new gift to state', () => {
        app.find('.btn-add').simulate('click');

        expect(app.state().gifts).toEqual([{id: 1}]);
    });

    it('adds a new gift to the rendered list ', () => {
        app.find('.btn-add').simulate('click');

        expect(app.find('.gift-list').children.length).toEqual(1);
    });
});
