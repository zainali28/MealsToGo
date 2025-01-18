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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { error, onRegister, setError } = useContext(AuthContext);

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
            secureTextEntry
            autoCapitalize="none"
            secure
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
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(text) => {
              setError(null);
              setRepeatPassword(text);
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
          <AuthButton
            icon="email-outline"
            mode="contained"
            onPress={() => {
              password === repeatPassword
                ? onRegister(email, password)
                : setError("Passwords do not match");
            }}
          >
            Register
          </AuthButton>
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
