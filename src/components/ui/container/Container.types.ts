import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export type Spacing = "none" | "01" | "02" | "03" | "04";

export interface ContainerProps {
  children: ReactNode;
  marginBottom?: Spacing;
  marginTop?: Spacing;
  padding?: "none" | "default";
  style?: ViewStyle;
  testID?: string;
}
