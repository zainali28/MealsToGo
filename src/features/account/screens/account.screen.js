import {
  AccountBackground,
  AccountCover,
  AccountContainer,
} from "../components/accounts.styles";

export const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountCover>
        <AccountContainer></AccountContainer>
      </AccountCover>
    </AccountBackground>
  );
};
