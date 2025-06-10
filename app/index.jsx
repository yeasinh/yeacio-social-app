import { useRouter } from "expo-router";
import { Button, Text } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";

const index = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <Text>index</Text>
      <Button title="welcome" onPress={() => router.push("welcome")}></Button>
    </ScreenWrapper>
  );
};

export default index;
