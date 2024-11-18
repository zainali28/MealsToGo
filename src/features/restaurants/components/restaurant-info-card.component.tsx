import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

type Restaurant = {
  name: string;
  icon: any;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};

export const RestaurantInfoCard = ({
  restaurant,
}: {
  restaurant: Restaurant;
}) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Text style={styles.restaurantName}>{name}</Text>
        <Text style={styles.restaurantAddress}>{address}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 4,
  },
  restaurantAddress: {
    fontSize: 16,
    margin: 4,
  },
});
