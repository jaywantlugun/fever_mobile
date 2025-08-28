import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
} from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { useTheme } from "@/src/hooks/useTheme";
import { buttonStyles, getShapeStyles, getSizeStyles } from "./Button.styled";
import { ButtonProps } from "./Button.type";

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  href,
  iconPosition = "left",
  icon,
  type = "button",
  variation = "primary",
  width = "content",
  size = "md",
  shape = "rounded",
  accessibilityLabel,
  onPress,
  style,
  textStyle,
  testID,
  loading = false,
}) => {
  const { colors } = useTheme();
  const router = useRouter();

  const handlePress = (event: any) => {
    if (disabled || loading) return;
    if (href) {
      router.push(href as never); // Type casting for dynamic routes
      return;
    }
    onPress?.(event);
  };

  const isPrimary = variation === "primary";
  const backgroundColors: [string, string] = isPrimary
    ? [colors.gradients.primary[0], colors.gradients.primary[1] ?? colors.gradients.primary[0]]
    : [colors.surface, colors.surface];

  const textColor = isPrimary ? "#fff" : colors.text;
  const sizeStyles = getSizeStyles(size);
  const shapeStyles = getShapeStyles(shape);

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled || loading}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      testID={testID}
      style={({ pressed }) => [
        buttonStyles.base,
        sizeStyles,
        shapeStyles,
        width === "fluid" && buttonStyles.fluid,
        disabled && buttonStyles.disabled,
        pressed && { opacity: 0.85, transform: [{ scale: 0.98 }] }, // Simple press effect
        style,
      ]}
    >
      <LinearGradient
        colors={backgroundColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          buttonStyles.base,
          sizeStyles,
          shapeStyles,
          width === "fluid" && buttonStyles.fluid,
        ]}
      >
        {loading ? (
          <Animated.View
            entering={FadeIn.duration(1000)}
            exiting={FadeOut.duration(1000)}
          >
            <ActivityIndicator color={textColor} />
          </Animated.View>
        ) : (
          <Animated.View
            style={buttonStyles.content}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            {icon && iconPosition === "left" && (
              <View style={buttonStyles.icon}>{icon}</View>
            )}
            <Text
              style={[
                buttonStyles.text,
                { color: textColor, fontSize: sizeStyles.fontSize },
                textStyle,
              ]}
            >
              {children}
            </Text>
            {icon && iconPosition === "right" && (
              <View style={buttonStyles.icon}>{icon}</View>
            )}
          </Animated.View>
        )}
      </LinearGradient>
    </Pressable>
  );
};

export default Button;
