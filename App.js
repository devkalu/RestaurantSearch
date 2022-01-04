import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetail from "./src/screens/RestaurantDetail";

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Restaurant: RestaurantDetail,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Restaurants Search",
      headerShown: false,
    },
  }
);

export default createAppContainer(Navigator);
