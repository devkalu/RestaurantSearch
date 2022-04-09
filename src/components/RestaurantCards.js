import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { withNavigation } from "react-navigation";
import { Asset } from "expo-asset";

import RestaurantCard from "./RestaurantCard";
import { width, height, size } from "../commonStyles/styles";

const RestaurantCards = ({ title, results, navigation }) => {
  const extractAddress = (obj) => {
    return obj["address1"];
  };

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTextStyle}>{title}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Restaurant", { id: item.id })}
              activeOpacity={0.8}
            >
              <RestaurantCard
                title={item.name}
                image={{
                  uri:
                    item.image_url !== ""
                      ? item.image_url
                      : Asset.fromModule(require("../../assets/no_image.jpg"))
                          .uri,
                }}
                rating={item.rating}
                review={item.review_count}
                location={extractAddress(item.location)}
              />
            </TouchableOpacity>
          );
        }}
        //image, title, rating, review, location
        keyExtractor={(item) => item.id}
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
    marginBottom: size * 0.005,
  },
  row: {
    flexDirection: "row",
  },
});

export default withNavigation(RestaurantCards);
