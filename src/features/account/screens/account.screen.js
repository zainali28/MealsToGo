import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
  Animation,
} from "../components/accounts.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthContext } from "../../../services/authentication/authentication.context";
import { useContext } from "react";
import { FadeInView } from "../../../components/animations/fade.animation";

export const AccountScreen = ({ navigation }) => {
  const { setError } = useContext(AuthContext);

  return (
    <AccountBackground>
      <AccountCover>
        <AnimationWrapper>
          <Animation source={require("../../../../assets/watermelon.json")} />
        </AnimationWrapper>
        <Title>MealsToGo</Title>
        <FadeInView>
          <AccountContainer>
            <AuthButton
              icon="login"
              mode="contained"
              onPress={() => {
                setError(null);
                navigation.navigate("Login");
              }}
            >
              Login
            </AuthButton>
            <Spacer position="bottom" size="large" />
            <AuthButton
              icon="email-outline"
              mode="contained"
              onPress={() => {
                setError(null);
                navigation.navigate("Register");
              }}
            >
              Register
            </AuthButton>
          </AccountContainer>
        </FadeInView>
      </AccountCover>
    </AccountBackground>
  );
};
