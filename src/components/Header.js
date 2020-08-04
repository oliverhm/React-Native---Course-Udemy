import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => (
  <View style={style.container}>
    <Text style={style.title}>{ props.title }</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#7b4ecf',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  title: {
    fontSize: 40,
    color: '#fff'
  }
});

export default Header;
