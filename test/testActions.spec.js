import * as actions from '../src/Ex.1.UserInput/actions'

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const text = 'Finish docs'
        const expectedAction = {
            type: 'ADD_TODO',
            id: 1,
            text
        }
        expect(actions.addTodo(1, text)).toEqual(expectedAction)
    })
})