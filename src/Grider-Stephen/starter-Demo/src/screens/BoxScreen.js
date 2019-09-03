import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Box Screen #1</Text>
      <Text style={styles.textTwoStyle}>Box Screen #2</Text>
      <Text style={styles.textThreeStyle}>Box Screen #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    height: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 4,
    alignSelf: "stretch"
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 4,
    ...StyleSheet.absoluteFillObject
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 2,
    alignSelf: "flex-start"
  }
});

export default BoxScreen;
