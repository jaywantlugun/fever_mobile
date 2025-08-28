import { GestureResponderEvent, TextStyle, ViewStyle } from "react-native";

export type IconPosition = "left" | "right";
export type ButtonType = "button" | "reset" | "submit";
export type ButtonVariation = "primary" | "secondary";
export type ButtonWidth = "content" | "fluid" | "fixed";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonShape = "rounded" | "pill" | "square";

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  href?: string;
  iconPosition?: IconPosition;
  icon?: React.ReactNode;
  type?: ButtonType;
  variation?: ButtonVariation;
  width?: ButtonWidth;
  fixedWidth?: number; 
  size?: ButtonSize;
  shape?: ButtonShape;
  accessibilityLabel?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  testID?: string;
  loading?: boolean;
}
