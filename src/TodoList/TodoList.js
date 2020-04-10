import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoItem from "./TodoItem";
function mapStateToProps(state) {
    return {};
}

class TodoList extends Component {
    render() {
        return (
            <div>
                helo <TodoItem/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(TodoList);
