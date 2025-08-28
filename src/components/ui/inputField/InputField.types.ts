import { ReactNode } from "react";
import { TextInputProps, TextStyle, ViewStyle } from "react-native";

export type IconPosition = "left" | "right";
export type InputSize = "sm" | "md" | "lg";
export type InputShape = "square" | "rounded";

export interface InputFieldProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  errorMessage?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  disabled?: boolean;
  width?: "fluid" | "fixed";
  fixedWidth?: number;
  size?: InputSize;
  secureToggle?: boolean;
  accessibilityLabel?: string;
  testID?: string;
  shape?: InputShape;
}
