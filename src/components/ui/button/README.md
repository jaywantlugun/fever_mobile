
## Custom Button Component

A production-ready, theme-aware button for **React Native (Expo)** with:

- **Gradient support**
- **Loading state**
- **Dynamic sizes & shapes**
- **Press feedback (opacity & scale)**
- **`expo-router` navigation support**
- **TypeScript typing**
- **ThemeProvider integration**

---

### File Structure
```
components/
  Button/
    Button.tsx
    Button.type.ts
    Button.styled.ts
README.md
```

---

### Installation
Ensure you have the required dependencies:

```bash
expo install expo-linear-gradient
npm install react-native-reanimated
```

> `react-native-reanimated` must be configured per Expo docs.

---

### Usage
```tsx
import CustomButton from "./components/Button/Button";

<CustomButton
  variation="primary"
  size="lg"
  shape="pill"
  width="fluid"
  loading={false}
  icon={<MyIcon />}
  iconPosition="left"
  onPress={() => console.log("Pressed")}
>
  Click Me
</CustomButton>
```

---

### Props
| Prop                | Type                                                      | Default     | Description |
|---------------------|-----------------------------------------------------------|-------------|-------------|
| `children`          | `React.ReactNode`                                        | **Required**| Button label |
| `disabled`          | `boolean`                                                | `false`     | Disable button |
| `href`              | `string`                                                 | `undefined` | Route path for `expo-router` |
| `iconPosition`      | `"left"` \| `"right"`                                   | `"left"`    | Icon placement |
| `icon`              | `React.ReactNode`                                        | `undefined` | Icon element |
| `type`              | `"button"` \| `"reset"` \| `"submit"`                  | `"button"`  | Button type |
| `variation`         | `"primary"` \| `"secondary"`                            | `"primary"` | Color style |
| `width`             | `"content"` \| `"fluid"`                                | `"content"` | Width style |
| `size`              | `"sm"` \| `"md"` \| `"lg"`                             | `"md"`      | Button size |
| `shape`             | `"rounded"` \| `"pill"` \| `"square"`                  | `"rounded"` | Border style |
| `loading`           | `boolean`                                                | `false`     | Show loading spinner |
| `onPress`           | `(event: GestureResponderEvent) => void`                 | `undefined` | Press handler |
| `style`             | `ViewStyle`                                              | `undefined` | Custom container styles |
| `textStyle`         | `TextStyle`                                              | `undefined` | Custom text styles |
| `testID`            | `string`                                                 | `undefined` | Testing ID |

---

### Theme Integration
The button pulls colors and gradients from `useTheme()`:

```tsx
const { colors } = useTheme();
```

Ensure your app is wrapped in `ThemeProvider` with `lightColors` and `darkColors`.

---

### Features
- **Gradient backgrounds** (from `colors.gradients`)
- **Loading state** with smooth fade
- **Size variants:** `sm`, `md`, `lg`
- **Shape variants:** `rounded`, `pill`, `square`
- **Press feedback:** opacity & scale effect
- **`expo-router` navigation** via `href`

---

### Next Improvements
- Add **color variations** (`success`, `warning`, `danger`) from theme
