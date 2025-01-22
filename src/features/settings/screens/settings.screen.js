import { SafeArea } from "../../restaurants/components/utility/safe-area.component";
import { AuthContext } from "../../../services/authentication/authentication.context";
import { useContext, useState } from "react";
import { List, Avatar, MD2Colors } from "react-native-paper";
import { SettingsList, AvatarContainer } from "../components/settings.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState("");

  const getPhoto = async () => {
    AsyncStorage.getItem(`photo-${user.uid}`).then((p) => {
      setPhoto(p);
    });
  };

  useFocusEffect(() => {
    getPhoto();
  });

  return (
    <SafeArea>
      <FadeInView>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {photo !== "" ? (
              <Avatar.Image source={{ uri: photo }} size={180} />
            ) : (
              <Avatar.Icon icon="human" size={180} />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="medium" />
          <Text variant="caption">{user.email}</Text>
        </AvatarContainer>
        <SettingsList style={{ padding: 16 }}>
          <List.Item
            title="Favourites"
            description="View your favourites"
            left={() => <List.Icon color={MD2Colors.orange800} icon="heart" />}
            onPress={() => navigation.navigate("Favourites")}
          />
          <List.Item
            title="Log out"
            description="Log out account"
            left={() => <List.Icon color={MD2Colors.orange800} icon="logout" />}
            onPress={() => onLogout()}
          />
        </SettingsList>
      </FadeInView>
    </SafeArea>
  );
};
