import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import { useContext, useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(CameraView)`
  flex: 1;
`;

export const CameraScreen = () => {
  const facingRef = useRef("back");
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();
  const { user } = useContext(AuthContext);

  const snap = async () => {
    if (cameraRef) {
      cameraRef.current?.takePictureAsync().then((p) => {
        console.log("saved" + p.uri);
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
    <View style={styles.container}>
      <ProfileCamera ref={cameraRef} facing={facingRef.current}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => snap()}>
            <Text style={styles.text}>Snap Photo</Text>
          </TouchableOpacity>
        </View>
      </ProfileCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
