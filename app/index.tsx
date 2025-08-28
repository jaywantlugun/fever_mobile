import { Button } from "@/src/components/ui/button";
import { InputField } from "@/src/components/ui/inputField";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit.</Text>
      <Button width="fluid">Press me please</Button>
      <InputField label="Password" placeholder="Enter your password"/>
    </View> 
  );
}
