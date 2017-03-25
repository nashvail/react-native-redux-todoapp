import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import { addTask } from '../action_creators';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    marginRight: 5,
    borderRadius: 2
  },
  button: {
    borderColor: '#3275FB',
    backgroundColor: '#3275FB',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 2
  },
  text: {
    color: '#FFF'
  }
});

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChangeText = (text) => {
    this.setState({ text });
  }

  handleTaskSubmit = () => {
    const { dispatch } = this.props;

    dispatch(addTask(this.state.text));

    this.textInput.clear();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          blurOnSubmit
          ref={component => { this.textInput = component; }}
          returnKeyType="done"
          placeholder="Task.."
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleTaskSubmit}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleTaskSubmit}
        >
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const HeaderContainer = connect()(Header);
