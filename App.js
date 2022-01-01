import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import { width, height } from "./src/commonStyles/styles";

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
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
