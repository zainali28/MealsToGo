import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <Searchbar style={styles.search} value="" />
    <View style={styles.list}>
      <RestaurantInfoCard
        restaurant={{
          name: "some restaurant",
          icon: null,
          photos: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oBl8oMj8unCKsHx9WuzVKgxc34HJnei-Qw&s",
          ],
          address: "somewhere",
          isOpenNow: true,
          rating: 3,
          isClosedTemporarily: false,
        }}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  search: {
    // backgroundColor: "green",
    margin: 10,
  },
  list: {
    // backgroundColor: "blue",
    flex: 1,
    padding: 16,
  },
});
