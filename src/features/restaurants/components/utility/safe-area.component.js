import { SafeAreaView, Platform, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
