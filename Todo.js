// React Native Todo App v2020-10
// Todo.js
// Code: github.com/lxndroc

import React from 'react';
import { Text, View } from 'react-native';
const Todo = ({ title }) => {
  return (
    <View>
        <Text>
          ✅ {title}
        </Text>
    </View>
  )
}
export default Todo;
