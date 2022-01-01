import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import RestaurantCard from "./RestaurantCard";
import { width, height, size } from "../commonStyles/styles";

const restaurants = [
  {
    uri: require("../../assets/restaurant1.jpeg"),
    title: "The Gourmet Kitchen",
    rating: 4.7,
    review: 123,
    location: "Rotterdam",
  },
  {
    uri: require("../../assets/restaurant2.jpeg"),
    title: "Chipotle Mexican Grill",
    rating: 4.7,
    review: 123,
    location: "Rotterdam",
  },
  {
    uri: require("../../assets/restaurant3.jpeg"),
    title: "Spago ",
    rating: 4.7,
    review: 123,
    location: "Rotterdam",
  },
  {
    uri: require("../../assets//restaurant4.jpeg"),
    title: "A380 In-Flight Kitchen",
    rating: 4.7,
    review: 123,
    location: "Rotterdam",
  },
];

const RestaurantCards = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTextStyle}>{title}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantCard
            image={item.uri}
            title={item.title}
            rating={item.rating}
            review={item.review}
            location={item.location}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: width * 0.02,
  },
  categoryTextStyle: {
    fontSize: size * 0.0215,
    fontWeight: "500",
    color: "#87be57",
    marginLeft: width * 0.03,
  },
  row: {
    flexDirection: "row",
  },
});

export default RestaurantCards;
