import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { addTodo } from "../actions";

class AddItem extends Component {
    state = {
        task: ''
    }

    onChangeHandler = (text) => {
        this.setState({
            task: text
        })
    }

    onSubmitHandler = () => {
        this.props.addTodo(this.state.task);
        this.setState({
            task: ''
        })
    }

    render() {
        return (
            <View>
                <Text> Input Field </Text>
                <TextInput 
                value={this.state.note}
                placeholder="add your task here" 
                onChangeText={(text) => this.onChangeHandler(text)}/>
                <TouchableOpacity onPress={() => this.onSubmitHandler()}>
                    <Text>Add Task</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(null, {addTodo})(AddItem);