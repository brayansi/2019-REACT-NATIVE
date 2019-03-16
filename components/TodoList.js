import React, { Component } from 'react';
import { View, FlatList, Text, Button } from 'react-native';

class TodoList extends Component {

    static defaultProps = {
        list: [],
        onRemove: () => { }
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleRow = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <Text style={{ flex: 1 }}>
                    {this.formatlistNumber(index)} - {item.text}
                </Text>
                <Button style={{ width: 30 }} title="X" color="#731919" onPress={() => this.props.onRemove(item)} />
            </View>
        )
    }

    KeyExtractor = (item) => item.id;


    formatlistNumber(number) {
        const digits = 2;
        return ('0'.repeat(digits) + (number + 1)).slice(-digits);
    }
    render() {
        const { props } = this;

        return (
            <View>
                <FlatList data={props.list} keyExtractor={this.keyExtractor} renderItem={this.handleRow} />
            </View>
        );
    }
}

export default TodoList;