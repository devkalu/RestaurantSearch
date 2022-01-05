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

  const filterResultsByPrice = (results, price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <ScrollView>
      <View style={styles.containerOne}>
        <View style={styles.searchInputStyle}>
          <Text style={styles.welcomeTextStyle}>
            A Restaurant is One Search Away
          </Text>
          <SearchInput
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
          />
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.categoryStyle}>
          <CategoryList searchApi={searchApi} />
        </View>
        <View style={styles.restaurantCardsStyle}>
          <RestaurantCards
            title="Affordable"
            results={filterResultsByPrice(results, "€")}
          />

          <RestaurantCards
            title="Bit Pricey"
            results={filterResultsByPrice(results, "€€")}
          />

          <RestaurantCards
            title="Expensive"
            results={filterResultsByPrice(results, "€€€")}
          />

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
    top: size * 0.04,
  },
  welcomeTextStyle: {
    fontSize: size * 0.03,
    fontWeight: "300",
    color: "white",
    marginHorizontal: width * 0.03,
    marginBottom: size * 0.01,
  },

  categoryStyle: {
    bottom: size * 0.06,
  },
  restaurantCardsStyle: {
    bottom: width * 0.12,
  },
  errorText: {
    fontSize: size * 0.012,
    marginHorizontal: width * 0.03,
    color: "red",
  },
});

export default HomeScreen;
