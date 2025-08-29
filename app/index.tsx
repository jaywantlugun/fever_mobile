import { Button } from "@/src/components/ui/button";
import { Container } from "@/src/components/ui/container";
import { InputField } from "@/src/components/ui/inputField";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
    >
      <Container>
      <Text>Edit app/index.tsx to edit.</Text>
      <Button width="fluid">Press me please</Button>
      <InputField label="Password" width="fluid" placeholder="Enter your password"/>
      </Container>
    </View> 
  );
}
