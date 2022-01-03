import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

import Category from "./Category";

const categories = [
  { uri: require("../../assets/beer.png"), title: "Beer" },
  { uri: require("../../assets/coffee-cup.png"), title: "Coffee" },
  { uri: require("../../assets/hamburger.png"), title: "Hamburger" },
  { uri: require("../../assets/hot-soup.png"), title: "soup" },
  { uri: require("../../assets/pasta.png"), title: "Pasta" },
  { uri: require("../../assets/rice.png"), title: "Rice" },
  { uri: require("../../assets/salad.png"), title: "Salad" },
  { uri: require("../../assets/smoothie.png"), title: "Smoothie" },
  { uri: require("../../assets/wine.png"), title: "Wine" },
];

const CategoryList = ({ searchApi }) => {
  return (
    <View>
      <FlatList
        sna
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => searchApi(item.title)}>
              <Category uri={item.uri} title={item.title} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryList;
