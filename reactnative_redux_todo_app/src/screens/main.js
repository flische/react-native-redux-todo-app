import React, { Component } from 'react'
import { View } from 'react-native'

import AddItem from '../components/add_item';
import TodoList from '../components/todo_list';

export default class Main extends Component {
  render() {
    return (
      <View>
        <AddItem />
        <TodoList />
      </View>
    )
  }
}