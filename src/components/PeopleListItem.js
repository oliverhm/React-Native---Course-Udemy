import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PeopleListItem = props => {
  const { people } = props;
  const { title, first, last } = people.name;

  return (
    <TouchableOpacity onPress={() => {

    }}>
      <View style={styles.line}>
        <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
        <Text style={styles.lineText}>
          { `${title} ${first} ${last}` }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 16,
    paddingLeft: 16,
    flex: 5
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 16,
    borderRadius: 40
  }
});

export default PeopleListItem;