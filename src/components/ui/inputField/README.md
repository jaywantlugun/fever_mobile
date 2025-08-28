
## Custom InputField Component

A lightweight, theme-aware input field for **React Native (Expo)** with:

- **Optional label**
- **Icon support (left or right)**
- **Shape variants (rounded, pill, square)**
- **Dynamic size variants**
- **ThemeProvider integration**
- **TypeScript typing**

---

### File Structure
```
components/
  InputField/
    InputField.tsx
    InputField.type.ts
    InputField.styled.ts
README.md
```

---

### Usage
```tsx
import InputField from "./components/InputField/InputField";

<InputField
  label="Email"
  placeholder="Enter your email"
  icon={<MailIcon />}
  iconPosition="left"
  shape="rounded"
  size="md"
  value={email}
  onChangeText={setEmail}
/>
```

---

### Props
| Prop             | Type                                 | Default     | Description |
|------------------|--------------------------------------|-------------|-------------|
| `label`          | `string`                             | `undefined` | Optional label text |
| `placeholder`    | `string`                             | `""`        | Placeholder text |
| `icon`           | `React.ReactNode`                    | `undefined` | Optional icon element |
| `iconPosition`   | `"left"` \| `"right"`               | `"left"`    | Icon placement |
| `value`          | `string`                             | `""`        | Controlled value |
| `onChangeText`   | `(text: string) => void`             | `undefined` | Change handler |
| `secureTextEntry`| `boolean`                            | `false`     | For password inputs |
| `size`           | `"sm"` \| `"md"` \| `"lg"`         | `"md"`      | Input size variant |
| `shape`          | `"rounded"` \| `"pill"` \| `"square"`| `"rounded"` | Border style |
| `style`          | `ViewStyle`                          | `undefined` | Custom container style |
| `inputStyle`     | `TextStyle`                          | `undefined` | Custom text input style |
| `labelStyle`     | `TextStyle`                          | `undefined` | Custom label style |

---

### Theme Integration
The InputField pulls colors from `useTheme()`:

```tsx
const { colors } = useTheme();
```

---

### Features
- Optional label
- Icon support
- Shape variants: `rounded`, `pill`, `square`
- Size variants: `sm`, `md`, `lg`
- Theme-aware colors
