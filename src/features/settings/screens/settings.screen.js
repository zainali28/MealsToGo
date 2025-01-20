import { SafeArea } from "../../restaurants/components/utility/safe-area.component";
import { AuthContext } from "../../../services/authentication/authentication.context";
import { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import { SettingsList, AvatarContainer } from "../components/settings.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon icon="human" size={180} />
        <Spacer position="top" size="medium" />
        <Text variant="caption">{user.email}</Text>
      </AvatarContainer>
      <SettingsList style={{ padding: 16 }}>
        <List.Item
          title="Favourites"
          description="View your favourites"
          left={() => <List.Icon icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          title="Log out"
          description="Log out account"
          left={() => <List.Icon icon="logout" />}
          onPress={() => onLogout()}
        />
      </SettingsList>
    </SafeArea>
  );
};
