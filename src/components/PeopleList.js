import React from "react";
import { Text, View, StyleSheet } from "react-native";

import PeopleListItem from "./PeopleListItem";

const PeopleList = (props) => {
  const { peoples } = props;
  const items = peoples.map(people =>
    <PeopleListItem
      key={people.name.first}
      people={people}
    />
  );

  return <View style={styles.container}>{items}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
  },
});

export default PeopleList;
