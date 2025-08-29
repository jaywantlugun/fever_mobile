
# Container Component

A lightweight wrapper component for **React Native (Expo)** that ensures consistent horizontal alignment and optional spacing.

---

## File Structure
```
components/
  Container/
    Container.tsx
    Container.types.ts
    Container.styled.ts
README.md
```

---

## Usage
```tsx
import Container from "./components/Container/Container";

<Container marginTop="02" marginBottom="03" padding="default">
  <Text>Aligned Content</Text>
</Container>
```

---

## Props
| Prop          | Type                                     | Default   | Description |
|---------------|------------------------------------------|-----------|-------------|
| `children`    | `React.ReactNode`                        | Required  | Content inside the container |
| `marginTop`   | `"none" | "01" | "02" | "03" | "04"`     | `"none"`  | Top margin spacing |
| `marginBottom`| `"none" | "01" | "02" | "03" | "04"`     | `"none"`  | Bottom margin spacing |
| `padding`     | `"none" | "default"`                     | `"none"`  | Adds padding inside the container |
| `style`       | `ViewStyle`                              | `undefined` | Additional styles |
| `testID`      | `string`                                 | `undefined` | Testing identifier |

---

## Features
- Consistent left & right margins across the app.
- Optional top and bottom spacing with predefined scales.
- Padding control for content separation.

---

## Next Improvements
- Add width variants (`fluid` or `content`) like Button & InputField.
- Add theme-aware background options.
