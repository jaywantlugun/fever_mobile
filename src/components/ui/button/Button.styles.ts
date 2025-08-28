import { StyleSheet } from "react-native";
import { ButtonShape, ButtonSize } from "./Button.types";

export const buttonStyles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderRadius: 8,
    overflow: "hidden",
  },
  disabled: {
    opacity: 0.5,
  },
  fluid: {
    width: "100%",
  },
  icon: {
    marginHorizontal: 6,
  },
  text: {
    fontWeight: "600",
  },
});

export const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return { paddingVertical: 8, paddingHorizontal: 0, fontSize: 14 };
    case "lg":
      return { paddingVertical: 16, paddingHorizontal: 0, fontSize: 18 };
    default:
      return { paddingVertical: 12, paddingHorizontal: 0, fontSize: 16 };
  }
};

export const getShapeStyles = (shape: ButtonShape) => {
  switch (shape) {
    case "pill":
      return { borderRadius: 999 };
    case "rounded":
      return { borderRadius: 25 };
    default:
      return { borderRadius: 8 };
  }
};
