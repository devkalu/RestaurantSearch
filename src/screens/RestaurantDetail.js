import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

//internal import
import { size } from "../commonStyles/styles";
import yelp from "../api/yelp";

const RestaurantDetail = ({ navigation }) => {
  const [results, setResult] = useState(null);

  const id = navigation.getParam("id");

  const getCategory = (arr) => {
    const tempArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].hasOwnProperty("title")) {
        tempArr.push(arr[i].title);
      }
    }
    if (tempArr.length > 1) {
      return tempArr.join(", ");
    } else if (tempArr.length === 1) {
      return tempArr[0];
    }
    return;
  };

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (results) {
    console.log(results);
    console.log(getCategory(results.categories));
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.pop()}
        >
          <Ionicons
            name="chevron-back-circle"
            size={24}
            color="black"
            style={styles.iconStyle}
          />
        </TouchableOpacity>

        <Image source={{ uri: results.image_url }} style={styles.imageStyle} />
        <View style={styles.detailContainer}>
          <Text style={styles.titleStyle}>{results.name}</Text>
          <Text style={styles.categoriesStyle}>
            {getCategory(results.categories)}
          </Text>
          <View style={[styles.ratingStyle]}>
            <Ionicons name="star" size={size * 0.012} color="gold" />
            <Text style={styles.ratingText}>
              {results.rating} ({results.review_count} Reviews){"\n"}
            </Text>
          </View>

          <View style={styles.openClosed}>
            {results.is_open_now ? (
              <Text
                style={{
                  fontWeight: "800",
                  fontSize: size * 0.012,
                  color: "#87be57",
                }}
              >
                Open Now
              </Text>
            ) : (
              <Text
                style={{
                  fontWeight: "800",
                  fontSize: size * 0.012,
                  color: "red",
                }}
              >
                Closed Now
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    );
  } else {
    return <ActivityIndicator size="large" color="#87be57" />;
  }
};

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: size * 0.3,
  },
  iconStyle: {
    position: "absolute",
    top: size * 0.035,
    left: size * 0.03,
    fontSize: size * 0.03,
    color: "#fff",
  },
  iconContainer: {
    zIndex: 5,
  },
  titleStyle: {
    fontSize: size * 0.0175,
    color: "#87be57",
    fontWeight: "900",
  },
  detailContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: size * 0.03,
    height: size * 0.125,
    paddingTop: size * 0.01,
  },
  container: {
    backgroundColor: "#f8f8fa",
  },
  categoriesStyle: {
    color: "#9e9fa1",
    fontSize: size * 0.012,
    fontWeight: "600",
  },
  ratingStyle: {
    flexDirection: "row",
    marginTop: size * 0.005,
  },
  ratingText: {
    fontSize: size * 0.012,
    marginLeft: size * 0.005,
    fontWeight: "bold",
    color: "#030005",
  },
  details: {
    height: size * 0.1,
    marginHorizontal: size * 0.03,
  },
  openClosed: {
    marginTop: size * 0.005,
  },
});

export default RestaurantDetail;
