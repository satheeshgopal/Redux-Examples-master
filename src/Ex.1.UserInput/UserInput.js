import React from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
import { addTodo } from './actions'

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.props.todosCollection}/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.props.todosCollection.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        //this.props.dispatch(addTodo(Date.now(), this.state.text))
        this.props.addTodoMethod(Date.now(), this.state.text);
        this.setState({text: ''});
    }
}

function mapStateToProps(state) {
    return {
        todosCollection: state.todos.todolist       
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodoMethod: bindActionCreators(addTodo, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);