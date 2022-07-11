import todos from '../src/Ex.1.UserInput/reducers'

describe('todoReducerInitialStage', () => {
    it('should return initial state of todo', () => {
        expect(todos({ "todos": { "todolist": [] } }, { type: null })).toEqual({ "todos": { "todolist": [] } });
    })    
})

describe('todoReducerItemAddedStage', () => {    
    it('should return next state of todo', () => {
        expect(todos({ "todos": { "todolist": [] } }, { type: 'ADD_TODO', id:"1", text:"test" }))
            .toEqual({ "todos": { "todolist": [{ id:"1", text:"test" }] } });
    })
})