import { useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthInput,
  AuthButton,
  ErrorContainer,
  Title,
} from "../components/accounts.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthContext } from "../../../services/authentication/authentication.context";
import { useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { TextInput } from "react-native-paper";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [hideRepeatPassword, setHideRepeatPassword] = useState(true);
  const [hidePassword, setHidePassword] = useState(true);

  const { error, onRegister, setError, isLoading } = useContext(AuthContext);

  return (
    <AccountBackground>
      <AccountCover>
        <Title>MealsToGo</Title>
        <AccountContainer>
          <AuthInput
            label="Email"
            placeholder="email@email.com"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => {
              setError(null);
              setEmail(text);
            }}
          />
          <Spacer position="bottom" size="large" />
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry={hidePassword}
            autoCapitalize="none"
            right={
              <TextInput.Icon
                onPress={() => setHidePassword(!hidePassword)}
                icon={"eye" + (hidePassword ? "" : "-off")}
                style={{ marginTop: 40 }}
              />
            }
            onChangeText={(text) => {
              setError(null);
              setPassword(text);
            }}
          />
          <Spacer position="bottom" size="large" />
          <AuthInput
            label="Repeat Password"
            value={repeatPassword}
            textContentType="password"
            secureTextEntry={hideRepeatPassword}
            autoCapitalize="none"
            right={
              <TextInput.Icon
                onPress={() => setHideRepeatPassword(!hideRepeatPassword)}
                icon={"eye" + (hideRepeatPassword ? "" : "-off")}
                style={{ marginTop: 40 }}
              />
            }
            onChangeText={(text) => {
              setError(null);
              setRepeatPassword(text);
            }}
            onSubmitEditing={() => {
              onRegister(email, password, repeatPassword);
            }}
          />
          <Spacer position="bottom" size="large" />
          {error && (
            <Spacer size="large">
              <ErrorContainer>
                <Text variant="error">{error}</Text>
              </ErrorContainer>
            </Spacer>
          )}
          <Spacer position="bottom" size="large" />
          {isLoading ? (
            <ActivityIndicator animating={true} color={MD2Colors.orange800} />
          ) : (
            <AuthButton
              icon="email-outline"
              mode="contained"
              onPress={() => {
                onRegister(email, password, repeatPassword);
              }}
            >
              Register
            </AuthButton>
          )}
          <Spacer size="large" />
          <AuthButton
            icon="keyboard-backspace"
            mode="contained"
            onPress={() => {
              navigation.goBack();
            }}
          >
            Back
          </AuthButton>
        </AccountContainer>
      </AccountCover>
    </AccountBackground>
  );
};
