import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

//Internal Imports
import SearchInput from "../components/SearchInput";
import CategoryList from "../components/CategoryList";
import RestaurantCards from "../components/RestaurantCards";
import { width, height, size } from "../commonStyles/styles";

import useResults from "../hooks/useResults";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults(term);

  return (
    <ScrollView>
      <View style={styles.containerOne}>
        <View style={styles.searchInputStyle}>
          <Text style={styles.welcomeTextStyle}>
            A Restaurant is One Search Away{results.length}
          </Text>
          <SearchInput
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
          />
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.categoryStyle}>
          <CategoryList />
        </View>
        <View style={styles.restaurantCardsStyle}>
          <RestaurantCards title="Cheap" />
          <RestaurantCards title="Bit Pricey" />
          <RestaurantCards title="Expensive" />
          <View style={styles.end}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerOne: {
    backgroundColor: "#87be57",
    height: size * 0.275,
    borderBottomLeftRadius: width * 0.05,
    borderBottomRightRadius: width * 0.05,
  },
  containerTwo: {
    backgroundColor: "#f8f8fa",
  },
  searchInputStyle: {
    flex: 1,
    top: size * 0.065,
  },
  welcomeTextStyle: {
    fontSize: size * 0.03,
    fontWeight: "300",
    color: "white",
    marginHorizontal: width * 0.03,
    marginBottom: size * 0.01,
  },
  sideImage: {
    height: 100,
    position: "absolute",
    width: width * 0.3,
    flex: 1,
  },
  categoryStyle: {
    bottom: size * 0.06,
  },
  restaurantCardsStyle: {
    bottom: width * 0.12,
  },
});

export default HomeScreen;
