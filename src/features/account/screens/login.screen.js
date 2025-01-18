import { useState } from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthInput,
  AuthButton,
} from "../components/accounts.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthContext } from "../../../services/authentication/authentication.context";
import { useContext } from "react";
import { Text } from "../../../components/typography/text.component";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, onLogin } = useContext(AuthContext);

  return (
    <AccountBackground>
      <AccountCover>
        <AccountContainer>
          <AuthInput
            label="Email"
            placeholder="email@email.com"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Spacer position="bottom" size="large" />
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(text) => setPassword(text)}
          />
          <Spacer position="bottom" size="large" />
          {error && (
            <Spacer size="large">
              <Text variant="error">{error}</Text>
            </Spacer>
          )}
          <Spacer position="bottom" size="large" />
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => {
              onLogin(email, password);
            }}
          >
            Login
          </AuthButton>
        </AccountContainer>
      </AccountCover>
    </AccountBackground>
  );
};
