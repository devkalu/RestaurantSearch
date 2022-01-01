//External import
import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

//internal Imports
import { width, height, size } from "../commonStyles/styles";

//Components imports

const SearchInput = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchInputContainer}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.searchInputStyles}
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        placeholder="Search for Food or Restaurants"
        placeholderTextColor={"white"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInputContainer: {
    backgroundColor: "#9dc876",
    height: (height + width) * 0.05,
    marginHorizontal: width * 0.03,
    borderRadius: width * 0.02,
    marginVertical: height * 0.01,
    flexDirection: "row",
  },
  icon: {
    color: "white",
    fontSize: (width + height) * 0.025,
    marginHorizontal: width * 0.02,
    alignSelf: "center",
  },
  searchInputStyles: {
    fontSize: size * 0.015,
    flex: 1,
    color: "#fff",
  },
});

export default SearchInput;
