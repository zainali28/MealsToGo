import React, { useContext, useEffect, useState } from "react";
import { Searchbar, MD2Colors } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  width: 100%;
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        value={searchKeyword}
        placeholder="Search for location"
        icon="map"
        iconColor={MD2Colors.orange800}
        onChangeText={(text) => setSearchKeyword(text)}
        onSubmitEditing={() => search(searchKeyword)}
      />
    </SearchContainer>
  );
};
