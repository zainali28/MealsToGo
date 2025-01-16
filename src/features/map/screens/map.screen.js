import MapView, { Callout, Marker } from "react-native-maps";
import styled from "styled-components";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { useEffect, useState, useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 998;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const MapScreen = ({ navigation }) => {
  const [latDelta, setLatDelta] = useState(0);

  const {
    location: {
      lat,
      lng,
      viewport: { northeast, southwest },
    },
  } = useContext(LocationContext);
  const { restaurants = [], isLoading } = useContext(RestaurantsContext);

  useEffect(() => {
    setLatDelta(northeast.lat - southwest.lat);
  }, [northeast, southwest]);

  return (
    <>
      <LoadingContainer>
        {isLoading && (
          <Loading animating={true} size={50} color={MD2Colors.orange800} />
        )}
      </LoadingContainer>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              longitude: restaurant.geometry.location.lng,
              latitude: restaurant.geometry.location.lat,
            }}
            onPress={() => {
              navigation.navigate("Restaurants", {
                screen: "RestaurantDetail",
                params: { restaurant },
              });
            }}
          >
            {/* <Callout>
              <MapCallout restaurant={restaurant} />
            </Callout> */}
          </Marker>
        ))}
      </Map>
    </>
  );
};
