import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import { useContext, useEffect, useRef } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../services/authentication/authentication.context";
import { MD2Colors } from "react-native-paper";

const ProfileCamera = styled(CameraView)`
  flex: 1;
`;

const ButtonContainer = styled.View`
  height: 500px;
`;

const CameraContainer = styled.View`
  flex: 1;
`;

export const CameraScreen = () => {
  const facingRef = useRef("front");
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();
  const { user } = useContext(AuthContext);

  const snap = async () => {
    if (cameraRef) {
      cameraRef.current?.takePictureAsync().then((p) => {
        AsyncStorage.setItem(`photo-${user.uid}`, p.uri);
      });
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return <Button onPress={requestPermission}>Grant permission</Button>;
  }

  return (
    <CameraContainer>
      <ProfileCamera ref={cameraRef} facing={facingRef.current} />
      <Button
        title="Snap"
        color={MD2Colors.orange800}
        onPress={() => {
          snap();
        }}
      />
    </CameraContainer>
  );
};
