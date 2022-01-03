import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { width, height, size } from "../commonStyles/styles";

const RestaurantCard = ({ image, title, rating, review, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.imageStyle} />
      </View>
      <Text style={styles.titleStyle} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
      <View style={[styles.locationStyle, styles.row]}>
        <Ionicons name="md-location" style={styles.icon} />
        <Text
          style={styles.locationTextStyle}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {location}
        </Text>
      </View>
      <View style={[styles.row, styles.ratingStyle]}>
        <Ionicons name="star" style={[styles.icon, { color: "gold" }]} />
        <Text style={styles.ratingTextStyle}>
          {rating}({review} Reviews)
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: size * 0.175,
    height: size * 0.2,
    backgroundColor: "#fff",
    borderRadius: size * 0.02,

    paddingHorizontal: size * 0.01,
    marginLeft: width * 0.03,
  },
  imageStyle: {
    height: size * 0.1175,
    width: size * 0.157,
    borderTopRightRadius: size * 0.015,
    borderTopLeftRadius: size * 0.015,
    resizeMode: "cover",
    marginVertical: size * 0.008,
  },
  imageContainer: {},
  row: {
    flexDirection: "row",
  },
  locationStyle: {
    marginTop: size * 0.005,
    marginRight: size * 0.0075,
  },
  icon: {
    color: "red",
    fontSize: size * 0.0125,
    marginRight: width * 0.0075,
  },
  locationTextStyle: {
    fontSize: size * 0.0125,
    color: "gray",
  },
  titleStyle: {
    fontSize: size * 0.0135,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  ratingTextStyle: {
    fontWeight: "600",
    fontSize: size * 0.012,
  },
  ratingStyle: {
    alignSelf: "flex-start",
    marginTop: size * 0.004,
  },
});

export default RestaurantCard;
