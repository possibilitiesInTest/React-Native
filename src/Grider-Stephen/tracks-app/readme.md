react stack navigator install

npx expo-cli install react-navigation react-native-gesture-handler react-native-reanimated react-navigation-stack react-navigation-tabs

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

boilerplate

import React from "react";
import { View, StyleSheeet, Text } from "react-native";

const TrackListScreen = () => {
return <Text style={{ fontSize: 48 }}>TrackListScreen</Text>;
};

const styles = StyleSheet.create({});

export default TrackListScreen;
