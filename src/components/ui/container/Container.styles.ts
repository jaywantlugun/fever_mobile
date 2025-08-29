import { StyleSheet } from "react-native";
import { Spacing } from "./Container.types";

const spacingMap: Record<Spacing, number> = {
  none: 0,
  "01": 4,
  "02": 8,
  "03": 16,
  "04": 24,
};

export const getContainerStyles = (
  marginTop: Spacing,
  marginBottom: Spacing,
  padding: "none" | "default"
) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 16, // Default left/right margin
      marginTop: spacingMap[marginTop],
      marginBottom: spacingMap[marginBottom],
      padding: padding === "default" ? 12 : 0,
    },
  });
