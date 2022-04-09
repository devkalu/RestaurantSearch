import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Ionicons, Feather, Entypo, FontAwesome } from "@expo/vector-icons";
import { Asset } from "expo-asset";

//internal import
import { size, width } from "../commonStyles/styles";
import yelp from "../api/yelp";

const RestaurantDetail = ({ navigation }) => {
  const [results, setResult] = useState(null);

  const id = navigation.getParam("id");
  const day = Number(new Date().getDay());

  const openingHours = (day, arr) => {
    let start = "";
    let end = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].day === day) {
        let startVal = arr[i].start;
        let endVal = arr[i].end;

        start = `${startVal.substring(0, 2)}:${startVal.substring(
          2,
          startVal.length
        )}`;
        end = `${endVal.substring(0, 2)}:${endVal.substring(2, endVal.length)}`;
      }
    }
    return `${start} - ${end}`;
  };

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
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.pop()}
        >
          <Ionicons name="chevron-back-circle" style={styles.iconStyle} />
        </TouchableOpacity>

        {results.photos.length > 0 ? (
          <FlatList
            pagingEnabled={true}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results.photos}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item }}
                style={{
                  height: size * 0.35,
                  width: width,
                  borderRadius: size * 0.005,
                }}
              />
            )}
            keyExtractor={(item) => item}
          />
        ) : (
          <Image
            source={require("../../assets/no_image.jpg")}
            style={{ height: size * 0.35, width: width }}
          />
        )}
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
            <Feather name="clock" style={styles.openIcon} />
            <Text style={styles.openTitle}>Opening Hours: </Text>
            <Text style={styles.timeStyle}>
              {results.hours[0]
                ? openingHours(day, results.hours[0].open)
                : null}{" "}
            </Text>
            {results.hours[0].is_open_now ? (
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: size * 0.012,
                  color: "#87be57",
                }}
              >
                (Open)
              </Text>
            ) : (
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: size * 0.012,
                  color: "red",
                }}
              >
                (Closed)
              </Text>
            )}
          </View>
        </View>
        <View style={styles.actionStyle}>
          <TouchableOpacity>
            <Ionicons name="call" style={styles.actionIconStyle} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="direction" style={styles.actionIconStyle} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="share" style={styles.actionIconStyle} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: size * 0.15,

            marginTop: size * 0.0075,
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              marginHorizontal: size * 0.03,
              flexDirection: "row",
              paddingVertical: size * 0.01,
            }}
          >
            <Ionicons
              name="location"
              style={{
                fontSize: size * 0.02,
                marginRight: size * 0.005,
                color: "#87be57",
              }}
            />
            <Text
              style={{
                fontSize: size * 0.0125,
                flex: 1,
              }}
            >
              {results.location.display_address}
            </Text>
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
    marginTop: size * 0.005,
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
    flexDirection: "row",
    top: size * -0.01,
  },
  openIcon: {
    fontSize: size * 0.012,
    color: "#030005",
    marginRight: size * 0.005,
  },
  openTitle: {
    fontSize: size * 0.012,
    color: "#030005",
    fontWeight: "600",
  },
  timeStyle: {
    color: "#9e9fa1",
  },
  actionStyle: {
    paddingHorizontal: size * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
    height: size * 0.05,
    backgroundColor: "#fff",
    marginTop: size * 0.0075,
    alignItems: "center",
  },
  actionIconStyle: {
    fontSize: size * 0.02,
    color: "#87be57",
  },
});

export default RestaurantDetail;
