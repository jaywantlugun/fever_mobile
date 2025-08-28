import { useTheme } from "@/src/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { getInputStyles } from "./InputField.styles";
import { InputFieldProps } from "./InputField.types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  icon,
  iconPosition = "left",
  errorMessage,
  containerStyle,
  inputStyle,
  labelStyle,
  disabled,
  width = "fluid",
  fixedWidth = 250,
  size = "md",
  secureToggle = false,
  shape = "rounded",
  accessibilityLabel,
  testID,
  secureTextEntry,
  ...textInputProps
}) => {
  const { colors } = useTheme();
  const styles = getInputStyles(colors, size, shape);

  const [isSecure, setIsSecure] = useState(secureTextEntry);

  const widthStyle =
    width === "fluid" ? styles.fluid : { width: fixedWidth };

  return (
    <View style={[styles.container, widthStyle, containerStyle]}>
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}

      <View style={[styles.inputWrapper, disabled && styles.disabled]}>
        {icon && iconPosition === "left" && <View style={styles.icon}>{icon}</View>}

        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          editable={!disabled}
          secureTextEntry={isSecure}
          accessibilityLabel={accessibilityLabel}
          testID={testID}
          {...textInputProps}
        />

        {secureToggle && (
          <Pressable onPress={() => setIsSecure(!isSecure)}>
            <Ionicons
              name={isSecure ? "eye-off" : "eye"}
              size={20}
              color={colors.textMuted}
            />
          </Pressable>
        )}

        {icon && iconPosition === "right" && <View style={styles.icon}>{icon}</View>}
      </View>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
    </View>
  );
};

export default InputField;
