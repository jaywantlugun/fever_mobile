import { ColorScheme } from "@/src/hooks/useTheme";
import { StyleSheet } from "react-native";
import { InputShape, InputSize } from "./InputField.types";

export const getInputStyles = (
  colors: ColorScheme,
  size: InputSize,
  shape: InputShape
) => {
  const sizeStyles = {
    sm: { fontSize: 14, paddingVertical: 8 },
    md: { fontSize: 16, paddingVertical: 10 },
    lg: { fontSize: 18, paddingVertical: 12 },
  };

  const shapeStyles = {
    square: 8,
    rounded: 25,
  };

  return StyleSheet.create({
    container: { flexDirection: "column", marginVertical: 8 },
    label: { fontSize: 14, fontWeight: "500", color: colors.text, marginBottom: 6 },
    inputWrapper: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: shapeStyles[shape],
      paddingHorizontal: 12,
      backgroundColor: colors.backgrounds.input,
    },
    input: {
      flex: 1,
      fontSize: sizeStyles[size].fontSize,
      color: colors.text,
      paddingVertical: sizeStyles[size].paddingVertical,
    },
    icon: { marginHorizontal: 6 },
    errorText: { marginTop: 4, fontSize: 12, color: colors.danger },
    disabled: { backgroundColor: colors.backgrounds.editInput, opacity: 0.6 },
    fluid: { width: "100%" },
  });
};
