import React, {Component} from 'react';
import TodoInputs from "./components/TodoInputs";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import {v4 as uuid} from 'uuid';

class App extends Component {
    state = {
        items: [],
        id: uuid(),
        item: "",
        editItem: false

    };
    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item
        };
        const updateItems = [...this.state.items, newItem];
        this.setState({
            items: updateItems,
            item: "",
            id: uuid(),
            editItem: false
        });
    };
    clearList = () => {
        this.setState({
            items: []
        })
    };
    handleDelete = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        })
    };

    handleEdit = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);

        const selectedItem = this.state.items.find(item => item.id === id);
        console.log(selectedItem);
        this.setState({
            items: filteredItems,
            item: selectedItem.title,
            editItem: true,
            id: id
        })
    };

    render() {
        return (
            <div>
                <div className={"container"}>
                    <h3 className={"text-capitalize text-center"}> Todo input </h3>
                    <div>
                        <TodoInputs item={this.state.item} handleChange={this.handleChange}
                                    handleSubmit={this.handleSubmit}
                                    editItem={this.state.editItem}/>
                        <TodoList items={this.state.items} clearList={this.clearList}
                                  handleDelete={this.handleDelete}
                                  handleEdit={this.handleEdit}
                                  handleComplete={this.handleComplete}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
