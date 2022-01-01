import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { width, height, size } from "../commonStyles/styles";

const Category = ({ uri, title }) => {
  return (
    <View style={styles.container}>
      <Image source={uri} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: (width + height) * 0.05,
    width: (width + height) * 0.05,
  },
  container: {
    backgroundColor: "white",
    width: (width + height) * 0.07,
    height: (width + height) * 0.1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: width * 0.03,
    marginLeft: width * 0.03,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: width * 0.01,
  },
  textStyle: {
    fontSize: (width + height) * 0.011,
    fontWeight: "bold",
    marginTop: width * 0.02,
  },
});

export default Category;
