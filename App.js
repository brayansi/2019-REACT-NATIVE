/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TodoList from './components/TodoList';
import Form from './components/Form';
import { TodoService } from './services/TodoService';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    list: []
  }
  
  async componentDidMount(){
    const list = await TodoService.list();
    this.setState({list});
  }

  add = async (text) => {
    const newItem = await TodoService.create({text});
    const list = [...this.state.list, newItem];
    this.setState({list});
  }

  remove = async (item) => {
    await TodoService.remove(item.id);
    const list = this.state.list.filter(itemList => itemList.id !== item.id);
    this.setState({list});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form onAdd={this.add}></Form>
        <TodoList list={this.state.list} onRemove={this.remove}></TodoList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
