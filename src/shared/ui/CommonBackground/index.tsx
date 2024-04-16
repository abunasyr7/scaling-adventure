import React from "react";
import { ImageBackground, Text } from "react-native";
import styles from "./styles";

const CommonBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground
      source={require("../../../../assets/background.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

export default CommonBackground;
