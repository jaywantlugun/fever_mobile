import React from "react";
import { View } from "react-native";
import { getContainerStyles } from "./Container.styles";
import { ContainerProps } from "./Container.types";

const Container: React.FC<ContainerProps> = ({
  children,
  marginTop = "none",
  marginBottom = "none",
  padding = "none",
  style,
  testID,
}) => {
  const styles = getContainerStyles(marginTop, marginBottom, padding);

  return (
    <View style={[styles.container, style]} testID={testID}>
      {children}
    </View>
  );
};

export default Container;
