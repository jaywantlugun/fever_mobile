import { Button } from "@/src/components/ui/button";
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
      <Button shape="square" width="fluid" loading>Press me please</Button>
    </View> 
  );
}
