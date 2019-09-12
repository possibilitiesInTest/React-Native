import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(context);

  const blogPost = state.find(blogPost.id === navigation.getParam("id"));

  return (
    <View>
      <Text>Edit Screen - {navigation.getParam("id")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
