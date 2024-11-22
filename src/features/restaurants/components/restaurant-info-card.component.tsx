import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantCardTitle = styled(Text)`
  font-color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.sizes[1]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: ${(props) => props.theme.space[1]};
`;
const RestaurantCardSubTitle = styled(Text)`
  font-color: ${(props) => props.theme.colors.text.secondary};
  font-size: ${(props) => props.theme.sizes[1]};
  margin: ${(props) => props.theme.space[1]};
`;

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
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <RestaurantCardSubTitle>{address}</RestaurantCardSubTitle>
      </Card.Content>
    </Card>
  );
};
