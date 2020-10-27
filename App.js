// React Native Todo App v2020-10
// App.js
// Code: github.com/lxndroc
// Reference: youtube.com/watch?v=hggGvwA_tcc

// rnfes
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, Button, View, SafeAreaView } from 'react-native';
import Todo from './Todo';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
      setTodos([input, ...todos]);
      setInput('');
  }

  return (
    <SafeAreaView>
        <View>
            <Text style={styles.titleText}>
                React Native Todo App
            </Text>
        </View>
        <ScrollView>
            {todos.map(todo => {
                <Todo title={todo} />
            })}
        </ScrollView>
        <TextInput
          style={styles.todoInput}
          value={input}
          placeholder='Enter a todo'
          onChangeText={text => setInput(text)}
        />
        <Button
          disabled={!input}
          onPress={addTodo}
          title='Add TODO'
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    todoInput: {
        margin: 20,
        height: 40,
        borderColor: 'red',
        borderWidth: 1
    },
    titleText: {
        // backgroundColor: 'red',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default App;