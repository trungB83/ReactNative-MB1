import React from "react";
import { View, StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
});

const SquareWithColor = ({ color }) => {
  return <View style={[commonStyles.square, { backgroundColor: color }]} />;
};

const ThreeSquares = () => {
  return (
    <View style={styles.container}>
      <SquareWithColor color="red" />
      <SquareWithColor color="green" />
      <SquareWithColor color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    width:"100%"
  },
});

export default ThreeSquares;