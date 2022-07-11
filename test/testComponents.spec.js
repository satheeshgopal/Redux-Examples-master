import React from 'react'
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../src/Ex.1.UserInput/TodoList'

function setup() {
    configure({ adapter: new Adapter() })
    const props = {
        items: []
    }
    const enzymeWrapper = mount(<TodoList {...props} />);
    return {
        props,
        enzymeWrapper
    }
}

describe('TodoList', () => {
    it('should render todoList', () => {
        const { enzymeWrapper } = setup()

        expect(enzymeWrapper.find('TodoList').find('ul').length > 0).toBe(true);

    })
});  